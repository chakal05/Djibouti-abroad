import connectDB from '../../util/mongodb';
import bcrypt from 'bcrypt';
import User from '../../util/userModel';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		// Check if name, email or password is provided
		const {
			name,
			firstName,
			email,
			tel,
			personToContact,
			country,
			city,
			password,
			arrival,
			departure,
			partnerName,
			partnerFirstName,
			partnerTel,
			partnerEmail,
			partnerCitizenship,
			kidName,
			kidFirstName,
			kidCitizenship,
			identifier,
			pass,
		} = req.body;
		if (
			name &&
			firstName &&
			email &&
			tel &&
			personToContact &&
			country &&
			city &&
			arrival &&
			departure &&
			password
		) {
			try {
				//  TODO   Hash password to store it in DB
				//	var passwordhash = await bcrypt.sign(password);
				var user = new User({
					name,
					firstName,
					email,
					tel,
					personToContact,
					country,
					city,
					arrival,
					departure,
					password,
					partnerName,
					partnerFirstName,
					partnerTel,
					partnerEmail,
					partnerCitizenship,
					kidName,
					kidFirstName,
					kidCitizenship,
				});
				// Create new user
				var usercreated = await user.save();
				return res.status(200).send(usercreated);
			} catch (error) {
				return res.status(500).send(error.message);
			}
		}

		if (identifier && pass) {
			try {
				var user = new User({});
				await User.find(
					{
						name: identifier,
						password: pass,
					},
					function (err, docs) {
						if (err) res.status(500).send(err);
						else if (docs.length > 0) {
							res.status(200).json(docs[0]);
						} else if (docs.length === 0)
							res.status(422).send('User not found');
					}
				);
			} catch (error) {
				return res.status(500).send(error.message);
			}
		}
	} else {
		res.status(422).send('req_method_not_supported');
	}
};

export default connectDB(handler);
