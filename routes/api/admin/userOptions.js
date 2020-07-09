const User = require('../../../models/userModel');

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
				before: async (request) => {
					console.log(request.payload)
					if (request.payload.record.password) {
						request.payload.record = {
							...request.payload.record,
							encryptedPassword: await bcrypt.hash(
								request.payload.record.password,
								10
							),
							password: undefined,
						};
					}
					return request;
				},
				after: (originalResponse, request, context) => {
					console.log(originalResponse)
					console.log(request)
					console.log(context)
				}
			},
			edit: { isAccessible: canModifyUsers },
			delete: { isAccessible: canModifyUsers }
		},
	},
};

module.exports = UserAdminOptions;