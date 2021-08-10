import connectDB from '../../util/mongodb';
import bcrypt from 'bcryptjs';
import User from '../../util/userModel';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		// Retrieve all the data
		let {
			id,
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
			// kidName,
			// kidFirstName,
			// kidCitizenship,
			identifier,
			pass,
            kids,
			flag,
		} = req.body;
		if (flag === 'Register') {
			// Check user basic info
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
				// Hash the password
				const salt = 12;
				bcrypt
					.genSalt(salt)
					.then((salt) => {
						return bcrypt.hash(password, salt);
					})
					.then((hash) => {
						// Store new user in your password DB.
						let user = new User({
							name,
							firstName,
							email,
							tel,
							personToContact,
							country,
							city,
							arrival,
							departure,
							password: hash,
							partnerName,
							partnerFirstName,
							partnerTel,
							partnerEmail,
							partnerCitizenship,
                            kids
							// kidName,
							// kidFirstName,
							// kidCitizenship,
						});
						user.save();
						return res
							.status(200)
							.send('Create user successfull');
					})
					.catch((err) => res.status(404).send(err.message));
			}
		}

		if (flag === 'Retrieve') {
			if (identifier && pass) {
				await User.find({
					name: identifier,
				})
					.then((docs) => {
                        console.log('Entered password' + ' ' +  pass)
						if (docs.length === 1) {
							let dBpass = docs[0]['password'];
							bcrypt.compare(
								pass,
								dBpass,
								function ( err, resp) {
									if (err)
										res.status(403).send(
											'Passwords dont match'
										);

									if (resp)
										res.status(200).send(docs[0]);
								}
							);
						} else if (docs.length < 1)
							res.status(422).send('User not found');
					})
					.catch((err) => res.status(404).send(err));
			}
		}

		if (flag === 'delete') {
			if (id) {
				await User.deleteOne({
					_id: id,
				})
					.then((doc) => {
						if (doc) res.status(200).send('Deleted user');
					})
					.catch((err) => res.status(404).send(err.message));
			}
		}
	} else {
		res.status(422).send('req_method_not_supported');
	}
};

export default connectDB(handler);
