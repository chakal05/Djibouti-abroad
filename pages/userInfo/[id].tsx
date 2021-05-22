import {
	Container,
	Grid,
	Typography,
	TextField,
	Button,
} from '@material-ui/core';
import React from 'react';
import { useRouter } from 'next/router';
import withAuth from '../../util/withAuth.js';
import {
	createStyles,
	Theme,
	makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		greenBackground: {
			backgroundColor: '#edf4ed',
			padding: '3rem',
			borderTopLeftRadius: '1rem',
			borderTopRightRadius: '1rem',
			borderBottomLeftRadius: '1rem',
			borderBottomRightRadius: '1rem',
		},

		carteContainer: {
			width: '100%',
			margin: '1rem 0',

			[theme.breakpoints.up(670)]: {
				width: '50%',
			},
			[theme.breakpoints.up(1200)]: {
				width: '30%',
			},
		},

		carte: {
			padding: '1rem',
			height: '150px',
			width: '70%',
			margin: '0 auto',

			[theme.breakpoints.up(670)]: {
				width: '300px',
			},
			[theme.breakpoints.up(1200)]: {
				//	width: '30%',
			},
		},

		cardTitle: {
			fontWeight: 'bold',
		},

		textField: {
			margin: '0.5rem 0',
			width: '100%',
			[theme.breakpoints.up(651)]: {
				width: '50%',
			},
		},

		secondTextField: {
			margin: '0.5rem 0',
			width: '100%',
			[theme.breakpoints.up(651)]: {
				width: '50%',
			},
		},

		gridSpace: {
			margin: '1rem 0',
		},

		titleSpace: {
			margin: '1rem 0',
		},
		btn: {
			width: '100%',
			backgroundColor: '#234924',
			color: '#fff',
		},

		show: {
			//	display: 'none',
		},
		formContainer: {
			//	display: 'none',
			width: '80%',
			margin: '0 auto',
			// 	padding: '1rem',
			[theme.breakpoints.down(650)]: {
				// 		display: 'flex',
				// 		justifyContent: 'center',
				// 		alignItems: 'center',
				width: '100%',
			},
		},

		titleBtn: {
			margin: '0 1rem',
		},
	})
);

function userInfo({ user }) {
	// const [firstName, setFirstName] = React.useState('');
	// const [name, setName] = React.useState('');
	// const [country, setCountry] = React.useState('');
	// const [tel, setTel] = React.useState('');
	// const [password, setPassword] = React.useState('');
	// const [email, setEmail] = React.useState('');
	// const [arrival, setArrival] = React.useState('');
	// const [departure, setDeparture] = React.useState('');
	// const [personToContact, setPersonToContact] = React.useState('');
	// const [city, setCity] = React.useState('');
	// const [partnerName, setpartnerName] = React.useState('');
	// const [partnerFirstName, setPartnerFirstName] = React.useState('');
	// const [partnerTel, setpartnerTel] = React.useState('');
	// const [partnerEmail, setPartnerEmail] = React.useState('');
	// const [partnerCitizenship, setPartnerCitizenship] = React.useState(
	// 	''
	// );
	// const [kidName, setKidName] = React.useState('');
	// const [kidFirstName, setKidFirstName] = React.useState('');
	// const [kidCitizenship, setKidCitizenship] = React.useState('');
	// const [identifier, setIdentifier] = React.useState('');
	// const [pass, setPass] = React.useState('');

	const classes = useStyles();
	const router = useRouter();
	//const userId = router.query.id;
	const userInfo = JSON.parse(localStorage.getItem('accessToken'));
	let {
		_id,
		name,
		firstName,
		country,
		tel,
		password,
		arrival,
		departure,
		city,
		email,
		personToContact,
		partnerName,
		partnerFirstName,
		partnerCitizenship,
		partnerEmail,
		partnerTel,
		kidName,
		kidFirstName,
		kidCitizenship,
	} = userInfo;

	return (
		<>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item xs={12} className={classes.greenBackground}>
						{' '}
						<Typography
							variant='h2'
							style={{
								fontWeight: 'bold',
							}}>
							{' '}
							Welcome {`${firstName} ${name}`}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<div
							style={{
								textAlign: 'center',
								margin: '2rem 0',
							}}>
							<div>
								<Typography
									variant='h3'
									style={{ margin: '1rem 0' }}>
									{' '}
									Profil
								</Typography>
							</div>
							<div>
								<Button
									variant='contained'
									className={classes.titleBtn}
									onClick={() => {
										document.getElementById(
											'partner'
										).style.display = 'none';
										document.getElementById(
											'main'
										).style.display = 'block';
										document.getElementById(
											'kids'
										).style.display = 'none';
									}}>
									{' '}
									{name}{' '}
								</Button>
								<Button
									variant='contained'
									className={classes.titleBtn}
									onClick={() => {
										document.getElementById(
											'partner'
										).style.display = 'block';
										document.getElementById(
											'main'
										).style.display = 'none';
										document.getElementById(
											'kids'
										).style.display = 'none';
									}}>
									Added partner
								</Button>
								<Button
									variant='contained'
									className={classes.titleBtn}
									onClick={() => {
										document.getElementById(
											'partner'
										).style.display = 'none';
										document.getElementById(
											'main'
										).style.display = 'none';
										document.getElementById(
											'kids'
										).style.display = 'block';
									}}>
									Added children
								</Button>
								<Button
									color='secondary'
									variant='contained'
									className={classes.titleBtn}
									onClick={async () => {
										let query = await fetch('/api/user', {
											method: 'POST',
											headers: {
												'Content-Type':
													'application/json',
											},
											body: JSON.stringify({
												id: _id,
												flag: 'delete',
											}),
										});

										if (query.status === 200) {
											localStorage.removeItem(
												'accessToken'
											);
											router.push({
												pathname: '/consularReg',
											});
										}
									}}>
									Delete
								</Button>
								<Button
									variant='contained'
									className={classes.titleBtn}
									onClick={() => {
										localStorage.removeItem('accessToken');
										router.push('/consularReg');
									}}>
									{' '}
									Logout{' '}
								</Button>
							</div>
						</div>
						<div className={classes.formContainer}>
							<div id='main' style={{ display: 'block' }}>
								<div className={classes.gridSpace}>
									<div className={classes.titleSpace}>
										<Typography variant='h6'>
											{' '}
											Personal information{' '}
										</Typography>
									</div>
									<TextField
										className={classes.textField}
										label='First name'
										variant='outlined'
										value={firstName}
										// onChange={(e) =>
										// 	setFirstName(e.target.value)
										// }
									/>
									<TextField
										className={classes.secondTextField}
										label='Name'
										variant='outlined'
										value={name}
										// onChange={(e) =>
										// 	setName(e.target.value)
										// }
									/>
									<div className={classes.titleSpace}>
										<Typography variant='h6'>
											{' '}
											Contact information{' '}
										</Typography>
									</div>
									<TextField
										className={classes.textField}
										label='Email'
										value={email}
										// onChange={(e) =>
										// 	setEmail(e.target.value)
										// }
										variant='outlined'
									/>
									<TextField
										className={classes.secondTextField}
										label='Telephone'
										variant='outlined'
										value={tel}
										// onChange={(e) =>
										// 	setTel(e.target.value)
										// }
									/>
									<TextField
										className={classes.secondTextField}
										label='Contact person number '
										variant='outlined'
										value={personToContact}
										// onChange={(e) =>
										// 	setPersonToContact(
										// 		e.target.value
										// 	)
										// }
									/>
								</div>
								<div className={classes.gridSpace}>
									<div className={classes.titleSpace}>
										<Typography variant='h6'>
											{' '}
											Address information abroad{' '}
										</Typography>
									</div>
									<TextField
										className={classes.textField}
										label='Country'
										variant='outlined'
										value={country}
										// onChange={(e) =>
										// 	setCountry(e.target.value)
										// }
									/>
									<TextField
										className={classes.secondTextField}
										label='City'
										variant='outlined'
										value={city}
										// onChange={(e) =>
										// 	setCity(e.target.value)
										// }
									/>
								</div>
								<div
									className={classes.gridSpace}
									style={{ marginBottom: '2rem' }}>
									<div className={classes.titleSpace}>
										<Typography variant='h6'>
											{' '}
											Arrival and departure{' '}
										</Typography>
									</div>
									<TextField
										className={classes.textField}
										label='Arrival'
										variant='outlined'
										value={arrival}
										// onChange={(e) =>
										// 	setArrival(e.target.value)
										// }
									/>
									<TextField
										className={classes.secondTextField}
										label='Departure'
										variant='outlined'
										value={departure}
										// onChange={(e) =>
										// 	setDeparture(e.target.value)
										// }
									/>
									<TextField
										className={classes.secondTextField}
										label='Password'
										variant='outlined'
										value={password}
										// onChange={(e) =>
										// 	setPassword(e.target.value)
										// }
									/>
								</div>
							</div>
							<div style={{ display: 'none' }} id='partner'>
								{!partnerName && (
									<Typography
										variant='h6'
										style={{
											textAlign: 'center',
											marginTop: '5rem',
										}}>
										{' '}
										No partner was added{' '}
									</Typography>
								)}

								{partnerName && (
									<div>
										<div>
											{' '}
											<Grid
												item
												className={classes.gridSpace}>
												<div
													className={classes.titleSpace}>
													<Typography variant='h6'>
														{' '}
														Personal information{' '}
													</Typography>
												</div>
												<TextField
													className={classes.textField}
													label='Name'
													variant='outlined'
													value={partnerName}
													// onChange={(e) =>
													// 	setpartnerName(
													// 		e.target.value
													// 	)
													// }
												/>
												<TextField
													className={
														classes.secondTextField
													}
													label='First name'
													variant='outlined'
													value={partnerFirstName}
													// onChange={(e) =>
													// 	setPartnerFirstName(
													// 		e.target.value
													// 	)
													// }
												/>
											</Grid>
											<Grid
												item
												className={classes.gridSpace}>
												<div
													className={classes.titleSpace}>
													<Typography variant='h6'>
														{' '}
														Contact information{' '}
													</Typography>
												</div>
												<TextField
													className={classes.textField}
													label='Citizenship'
													variant='outlined'
													value={partnerCitizenship}
													// onChange={(e) =>
													// 	setPartnerCitizenship(
													// 		e.target.value
													// 	)
													// }
												/>
												<TextField
													className={
														classes.secondTextField
													}
													label='Email'
													variant='outlined'
													value={partnerEmail}
													// onChange={(e) =>
													// 	setPartnerEmail(
													// 		e.target.value
													// 	)
													// }
												/>
												<TextField
													className={
														classes.secondTextField
													}
													label='Telephone'
													variant='outlined'
													value={partnerTel}
													// onChange={(e) =>
													// 	setpartnerTel(
													// 		e.target.value
													// 	)
													// }
												/>
											</Grid>
										</div>
									</div>
								)}
							</div>
							<div style={{ display: 'none' }} id='kids'>
								{!kidName && (
									<Typography
										variant='h6'
										style={{
											textAlign: 'center',
											marginTop: '5rem',
										}}>
										{' '}
										No child was added{' '}
									</Typography>
								)}
								{kidName && (
									<div>
										<Grid
											item
											className={classes.gridSpace}>
											<div className={classes.titleSpace}>
												<Typography variant='h6'>
													{' '}
													Personal information{' '}
												</Typography>
											</div>
											<TextField
												className={classes.textField}
												label='Name'
												variant='outlined'
												value={kidName}
												// onChange={(e) =>
												// 	setKidName(
												// 		e.target.value
												// 	)
												// }
											/>
											<TextField
												className={
													classes.secondTextField
												}
												label='First name'
												variant='outlined'
												value={kidFirstName}
												// onChange={(e) =>
												// 	setKidFirstName(
												// 		e.target.value
												// 	)
												// }
											/>
											<TextField
												className={
													classes.secondTextField
												}
												label='Citizenship'
												variant='outlined'
												value={kidCitizenship}
												// onChange={(e) =>
												// 	setKidCitizenship(
												// 		e.target.value
												// 	)
												// }
											/>
										</Grid>
									</div>
								)}
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default withAuth(userInfo);
