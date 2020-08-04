const cloudinary = require("cloudinary");

exports.uploadFileToCloudinary = async (files) => {
	const numFiles = files.length;
	// res_promises will be an array of promises
	console.log('Uploading Images')
	let res_promises = files.map(
		(file) =>
			new Promise((resolve, reject) => {
				cloudinary.v2.uploader.upload(
					file.path,
					{ use_filename: true, unique_filename: false },
					function(error, result) {
						if (error) reject(error);
						else resolve(result);
					}
				);
			})
	);
	// Promise.all will fire when all promises are resolved
	return Promise.all(res_promises)
		.then((result) => {
			console.log('Images Uploaded')
			return result
		})
		.catch((error) => {
			/*  handle error */
			console.log(error)
		});
	// cloudinary.v2.uploader.upload
};