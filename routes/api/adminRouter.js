const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const UserAdminOptions = require('./admin/userOptions.js')


const generateAdmin = (db) => {
	const AdminBroOptions = {
	  branding: {
	  	softwareBrothers: false,
		  companyName: '',
		  logo: '/media/logo.svg'
		},
	  resources: [UserAdminOptions],
	  rootPath: '/admin',
	  database: db
	}
	const adminBro = new AdminBro(AdminBroOptions)
	const router = AdminBroExpress.buildRouter(adminBro)
	return router

}

// const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
//   authenticate: async (email, password) => {
//     const user = await User.findOne({ email })
//     if (user) {
//       const matched = await bcrypt.compare(password, user.encryptedPassword)
//       if (matched) {
//         return user
//       }
//     }
//     return false
//   },
//   cookiePassword: 'some-secret-password-used-to-secure-cookie',
// })




module.exports = generateAdmin;