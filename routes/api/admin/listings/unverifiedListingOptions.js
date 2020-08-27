const UnverifiedListing = require('../../../../models/listings/UnverifiedListing.js');
const { fieldSanitizer } = require('../../../../controllers/helpers/modelHelpers.js');
const { approveUnverifiedListing } = require('../../../../controllers/helpers/listings/unverifiedListingsHelpers.js');
const { listingConfigOptions } = require('./config.js')
const AdminBro = require('admin-bro');
const listingsParent = require('./listingsParent');
const canModifyUnverifiedListings = ({
	currentAdmin
}) => currentAdmin && currentAdmin.role === 'Administrator';
const UnverifiedListingAdminOptions = {
	resource: UnverifiedListing,
	options: { ...listingConfigOptions,
		parent: listingsParent,
		actions: {
			new: {
				before: async (request, response, context) => {
					const { payload } = request;
					const result = await fieldSanitizer(payload, UnverifiedListing);
					if (result.isError) throw new ValidationError(result.errors);
					request.payload = result.payload;
					return request;
				},
			},
			approveListing: {
				actionType: 'record',
				guard: 'Are you sure you want to approve this request?',
				isVisible: (context) => {
					const { record, _admin, h, currentAdmin } = context
					return true
				},
				component: false,
				handler: async (request, response, context) => {
					let verifiedListing = await approveUnverifiedListing(context)
					if (verifiedListing.isError) return verifiedListing
					return {
						record: verifiedListing.toJSON(currentAdmin)
					}
				}
			},
			edit: {
				before: async (request, context) => {
					const { headers, payload } = request
					if (request.method === 'get') {
						const result = await fieldSanitizer(payload, UnverifiedListing);
						if (result.isError) throw new ValidationError(result.errors);
						request.payload = result.payload;
					}
					return request;
				},
			}
		},
	},
};
module.exports = UnverifiedListingAdminOptions;