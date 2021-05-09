import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
	name: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	tel: { type: Number, required: true },
	personToContact: { type: String, required: true },
	country: { type: String, required: true },
	city: { type: String, required: true },
	arrival: { type: String, required: true },
	departure: {
		type: String,
		required: true,
	},
	email: { type: String, required: true },
	password: {
		type: String,
		required: true,
	},
	since: {
		type: Date,
		default: Date.now,
	},
	partnerName: { type: String, required: false },
	partnerFirstName: { type: String, required: false },
	partnerTel: { type: String, required: false },
	partnerEmail: { type: String, required: false },
	partnerCitizenship: { type: String, required: false },
	kidName: { type: String, required: false },
	kidFirstName: { type: String, required: false },
	kidCitizenship: { type: String, required: false },
});

mongoose.models = {};

var User = mongoose.model('users', user);

export default User;
