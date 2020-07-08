const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
const AdminBroExpress = require('admin-bro-expressjs')
const UserAdminOptions = require('./admin/userOptions.js')
AdminBro.registerAdapter(AdminBroMongoose)



const AdminBroOptions = {
  branding: {
  	softwareBrothers: false,
	  companyName: 'CarTrader',
	  logo: '/media/logo.svg'
	},
  resources: [UserAdminOptions],
  rootPath: '/admin',
}

const adminBro = new AdminBro(AdminBroOptions)
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email })
    if (user) {
      const matched = await bcrypt.compare(password, user.encryptedPassword)
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
})


module.exports = router;