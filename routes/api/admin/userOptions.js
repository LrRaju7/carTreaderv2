const User = require('../../../models/userModel');
const bcrypt = require('bcryptjs');

const canModifyUsers = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'Administrator'
const UserAdminOptions = {
	resource: User,
	options: {
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
			edit: { isAccessible: canModifyUsers },
			delete: { isAccessible: canModifyUsers }
		},
	},
};

module.exports = UserAdminOptions;