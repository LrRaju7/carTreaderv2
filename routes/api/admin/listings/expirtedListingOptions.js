const UnverifiedListing = require('../../../../models/models/listings/UnverifiedListing.js');
const bcrypt = require('bcryptjs');

const canModifyUnverifiedListings = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'Administrator'
const UnverifiedListingAdminOptions = {
	resource: UnverifiedListing,
	options: {
		listProperties: ['_id','email', 'name', 'role'],
		properties: {
			encryptedPassword: { isVisible: false },
			password: {
				type: "string",
				isVisible: {
					list: false,
					edit: true,
					filter: false,
					show: false,
				},
			},
		},
		actions: {
			new: {
				actionType: "resource",
				before: async (request) => {
					const user = request.payload;

					const salt = await bcrypt.genSalt(10);
					user.password = await bcrypt.hash(user.password, salt);
					console.log(user)
					request.payload = user
					console.log('hjola')
					return request
				}
			},
			// edit: { isAccessible: canModifyUnverifiedListings },
			// delete: { isAccessible: canModifyUnverifiedListings }
		},
	},
};

module.exports = UnverifiedListingAdminOptions;