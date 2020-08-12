const UnverifiedListing = require('../../../../models/listings/UnverifiedListing.js');
const VerifiedListing = require('../../../../models/listings/VerifiedListing.js');
const {
	fieldSanitizer,
} = require('../../../../controllers/helpers/modelHelpers.js');
const {
	approveUnverifiedListing
} = require('../../../../controllers/helpers/listings/unverifiedListingsHelpers.js');
const AdminBro = require('admin-bro');
const bcrypt = require('bcryptjs');
const listingsParent = require('./listingsParent');
const _ = require('underscore');

const canModifyUnverifiedListings = ({
	currentAdmin
}) => currentAdmin && currentAdmin.role === 'Administrator';

const UnverifiedListingAdminOptions = {
	resource: UnverifiedListing,
	options: {
		properties: {
			createdAt: {
				isVisible: {
					edit: false,
				},
			},
			createdBy: {
				isVisible: {
					edit: false,
				},
			},
			currentPrice: {
				isVisible: {
					edit: false,
				},
			},
			slug: {
				isVisible: {
					edit: false,
				},
			},
			images: {
				components: {
					edit: AdminBro.bundle(
						'../../../../ui/components/ImageUpload.jsx',
					),
					show: AdminBro.bundle(
						'../../../../ui/components/ImageList.jsx',
					),
					approve: AdminBro.bundle(
						'../../../../ui/components/ImageList.jsx',
					),
				},
			}
		},
		parent: listingsParent,
		actions: {
			new: {
				before: async (request, response, context) => {
					const {
						payload
					} = request;
					const result = await fieldSanitizer(payload, UnverifiedListing);
					if (result.isError) {
						console.log(result.errors);
						throw new ValidationError(result.errors);
					}
					request.payload = result.payload;
					console.log(request.payload);
					return request;
				},
			},
			approveListing: {
				actionType: 'record',
				guard: 'Are you sure you want to approve this request?',
				isVisible: (context) => {
					const {
						record,
						_admin,
						h,
						currentAdmin
					} = context
					return true
				},
				component: false,
				handler: async (request, response, context) => {
					const {
						record,
						_admin,
						currentAdmin,
						resource
					} = context
					console.log('hhh')
					let payload = await UnverifiedListing.findById(record.param('_id')).lean()
					payload['__v'] = undefined
					delete payload['createdAt']
					delete payload['_id']
					console.log(payload)
					try {
						let verifiedListing = new VerifiedListing(payload)
						await verifiedListing.save()
						context.record = verifiedListing
						console.log("YAYY")
					} catch (err) {
						console.log(err)
						return {
				          record: record.toJSON(currentAdmin),
				          notice: {
				            message: error.baseError.message,
				            type: 'error',
				          },
				        }
					}
					
					console.log('saved reso')
					if (verifiedListing.isValid()) {
					    try {
					      await resource.delete(request.params.recordId)
					      console.log("HID")
					    } catch (error) {
					      if (error instanceof ValidationError && error.baseError) {
					        return {
					          record: record.toJSON(currentAdmin),
					          notice: {
					            message: error.baseError.message,
					            type: 'error',
					          },
					        }
					      }
					      throw error
					    }


					}
					return {
						record: verifiedListing.toJSON(currentAdmin),
						notice: {
							message: translateMessage('thereWereValidationErrors', resource.id()),
							type: 'error',
						},
					}
				}
			},
			edit: {
				before: async (request, context) => {
					const {
						headers
					} = request
					console.log('hey ho', request.method)
					if (request.method === 'get') {
						const {
							payload
						} = request;
						const result = await fieldSanitizer(payload, UnverifiedListing);
						if (result.isError) {
							console.log(result.errors);
							throw new ValidationError(result.errors);
						}
						request.payload = result.payload;
					}
					return request;
				},
			},
			// delete: { isAccessible: canModifyUnverifiedListings }
		},
	},
};

module.exports = UnverifiedListingAdminOptions;