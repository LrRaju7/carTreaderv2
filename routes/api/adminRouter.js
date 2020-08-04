const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const UserAdminOptions = require('./admin/userOptions.js')
const UnverifiedListingAdminOptions = require('./admin/listings/unverifiedListingOptions.js')
const User = require('../../models/User');

const generateAdmin = (db) => {
	const AdminBroOptions = {
		assets:{
			styles: ['/css/admin.css']
		},
	  branding: {
	  	softwareBrothers: false,
		  companyName: '',
		  logo: '/media/logo.svg'
		},
	  resources: [UserAdminOptions, UnverifiedListingAdminOptions],
	  rootPath: '/admin',
	  database: db
	}
	const adminBro = new AdminBro(AdminBroOptions)
	const router = AdminBroExpress.buildRouter(adminBro)
	// const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
	// 	authenticate: async (email, password) => {
	// 		const user = await User.findOne({ email });
	// 		console.log(user)
	// 		if (user) {
	// 			const matched = await bcrypt.compare(
	// 				password,
	// 				user.password
	// 			);
	// 			if (matched && (user.role === 'Administrator')) {
	// 				return user;
	// 			}
	// 		}
	// 		return false;
	// 	},
	// 	cookiePassword: "some-secret-password-used-to-secure-cookie",
	// });	
	return router

}

module.exports = generateAdmin;