const {
	uploadFileToCloudinary,
} = require("./fileHelpers.js");
exports.fieldSanitizer = async (payload, Model) => {
	let sanitizedPayload = {}, imageArr = [], images = [];
	let hasImages = false, errors = {}, result = { isError: false };
	const keylist = Object.keys(payload);
	for (var i = 0; i < keylist.length; i++) {
		if (!keylist[i].includes("imageFiles")) {
			sanitizedPayload[keylist[i]] = payload[keylist[i]];
		} else {
			imageArr.push(payload[keylist[i]]);
			hasImages = true
		}
	}
	
	if (hasImages) {
		console.log('Starting Image Upload')
		imageSet = await uploadFileToCloudinary(imageArr);
		console.log('setted')
		imageSet.forEach((image, index) => {
			let imageObj = {image: image.url, _id: image.public_id, highlighted: false}
			if (index == 0) imageObj.highlighted = true
			images.push(imageObj)
		})
		sanitizedPayload.images = images
		console.log(sanitizedPayload)
	}
	let isValidObj = new Model(sanitizedPayload);
	isValidObj.validate((err) => {
		if (err){
			const errorList = Object.keys(err.errors);
			for (var i = 0; i < errorList.length; i++) errors[errorList[i]] = err.errors[errorList[i]].message;
			result.isError = true;
			result.errors = errors;
			console.log(result)
			return result;
		}

	});
	console.log('Reached')
	result.payload = sanitizedPayload;
	return result;
};