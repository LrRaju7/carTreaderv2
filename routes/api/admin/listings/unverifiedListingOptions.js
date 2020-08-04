const UnverifiedListing = require("../../../../models/listings/UnverifiedListing.js");
const {
	fieldSanitizer,
} = require("../../../../controllers/helpers/modelHelpers.js");
const AdminBro = require("admin-bro");
const bcrypt = require("bcryptjs");
const listingsParent = require("./listingsParent");
const _ = require("underscore");

const canModifyUnverifiedListings = ({ currentAdmin }) => currentAdmin && currentAdmin.role === "Administrator";

const UnverifiedListingAdminOptions = {
	resource: UnverifiedListing,
	options: {
		properties: {
			createdAt: {
				isVisible: {
					edit: false
				}
			},
			createdBy: {
				isVisible: {
					edit: false
				}
			},
			currentPrice: {
				isVisible: {
					edit: false
				}
			},			
			slug: {
				isVisible: {
					edit: false
				}
			},			
			images: {
				components: {
					edit: AdminBro.bundle(
						"../../../../ui/components/ImageUpload.jsx"
					),
					show: AdminBro.bundle(
						"../../../../ui/components/ImageList.jsx"
					),					
				},
			},
			car: {
				components: {

				}
			}
		},
		parent: listingsParent,
		actions: {
			new: {
				actionType: "resource",
				before: async (request, response, context) => {
					const { payload } = request;
					let result = await fieldSanitizer(payload, UnverifiedListing);
					if (result.isError) {
						console.log(result.errors);
						throw new ValidationError(result.errors);
					}
					console.log(result)
					request.payload = result.payload
					console.log(request.payload)
					return request;
				},
			},
			edit: {
				before: async (request, response, context) => {
					const { payload } = request;
					let result = await fieldSanitizer(payload, UnverifiedListing);
					if (result.isError) {
						console.log(result.errors);
						throw new ValidationError(result.errors);
					}
					console.log("HI")
					request.payload = result.payload
					console.log(request.payload)
					return request;
				},
			},
			// delete: { isAccessible: canModifyUnverifiedListings }
		},
	},
};

module.exports = UnverifiedListingAdminOptions;