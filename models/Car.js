const mongoose = require('mongoose')
const { Schema } = mongoose
var cars = require('../config/data/car_manufacturers.json')
var years = require('../config/data/years.json')
const CarSchema = new Schema({
	make: {
		type: String,
		enum: cars,
		required: true
	},
	model: {
		type: String,
		required: true
	},
	year: {
		type: String,
		enum: years,
		required: true
	},
	engine: {
		capacity: {
			type: Number,
			min: [500, "Cannot be less than 500cc"],
			max: [8000, "Cannot be more than 8000cc"],			
			required: true
		},
		type: {
			type: String,
			enum: ['Inline-4', 'Inline-6', 'V6', 'V8', 'V12'],
			default: 'Inline-4',
			required: true
		}
	},
	color: {
		exterior: {
			type: String,
			required: true
		},
		interior: {
			type: String,
			required: true
		},		
	},
	highlights: {
		type: String,
		required: true
	},
	equipment: {
		type: String,
		required: true
	},
	modifications: {
		type: String,
		required: true
	},
	issues: {
		type: String,
		required: true
	},
	service_history: {
		type: String,
		required: true
	},		
	ownership_history: {
		type: String,
		required: true
	},
	status: {
		type: String,
		enum: ['Brand New', 'Recondition', 'Used', 'Salvage'],
		default: 'Brand New',
		required: true		
	}
})

module.exports = CarSchema