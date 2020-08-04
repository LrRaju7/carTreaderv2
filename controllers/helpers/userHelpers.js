const User = require('../../models/User');


exports.checkUserExists = async (email) => {
	let user = await User.findOne({ email });
	if (user) return user;
	return false
}

exports.checkUserIsAdmin = async (id) => {
	let user = await User.findById(id);
	if (user) return user;
	return false
}

exports.checkUserIsAuctioneer = async (id) => {
	let user = await User.findById(id);
	// if (user.toObject()) return user;
	return false

}

exports.checkUserIsBidder = async (id) => {
	let user = await User.findById(id);
	if (user) return user;
	return false
}