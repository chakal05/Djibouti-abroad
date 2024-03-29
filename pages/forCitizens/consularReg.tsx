import React from 'react';
import Head from 'next/head';
import {
	Container,
	Grid,
	Typography,
	TextField,
	Button,
} from '@material-ui/core';
import {
	createStyles,
	Theme,
	makeStyles,
} from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topColorGreen: {
			backgroundColor: '#edf4ed',
			padding: '3rem',
			borderBottomLeftRadius: '1rem',
			borderBottomRightRadius: '1rem',
		},
		titleContainer: {
			padding: '3rem',
			width: '100%',
			textAlign: 'center',
		},

		secondRow: {
			width: '100%',
			margin: '0 auto',
			[theme.breakpoints.up(651)]: {},
		},

		formContainer: {
			display: 'none',
			width: '70%',
			margin: '0 auto',
			padding: '2rem',
			[theme.breakpoints.down(650)]: {
				width: '100%',
			},
		},

		boxContainer: {},

		textField: {
			margin: '0 0.5rem',
			width: '100%',

			[theme.breakpoints.up(651)]: {
				width: '40%',
				margin: '0.5rem 1rem',
			},
		},

		secondTextField: {
			margin: '0 0.5rem',
			width: '100%',
			[theme.breakpoints.up(651)]: {
				width: '40%',
				margin: '0.5rem 1rem',
			},
		},

		gridSpace: {
			margin: '1rem 0',
		},

		titleSpace: {
			marginTop: '0.5rem ',
			marginBottom: '-0.5rem',
		},

		btnContainer: {
			textAlign: 'center',
			height: '70px',
			paddingTop: '1rem',
		},

		largeBtn: {
			margin: '.5rem',
			width: '250px',
			height: '200px',
		},

		btn: {
			width: '80%',
			backgroundColor: '#234924',
			color: '#fff',
			'&:hover': {
				backgroundColor: '#fff',
				color: '#234924',
				fontWeight: 'bold',
				border: '2px solid #234924',
			},
		},

		show: {
			display: 'none',
		},
	})
);

export default function ConsularRegistration() {
	const [firstName, setFirstName] = React.useState('');
	const [name, setName] = React.useState('');
	const [country, setCountry] = React.useState('');
	const [tel, setTel] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [arrival, setArrival] = React.useState('');
	const [departure, setDeparture] = React.useState('');
	const [personToContact, setPersonToContact] = React.useState('');
	const [city, setCity] = React.useState('');
	const [partnerName, setpartnerName] = React.useState('');
	const [partnerFirstName, setPartnerFirstName] = React.useState('');
	const [partnerTel, setpartnerTel] = React.useState('');
	const [partnerEmail, setPartnerEmail] = React.useState('');
	const [partnerCitizenship, setPartnerCitizenship] =
		React.useState('');
	const [kidName, setKidName] = React.useState('');
	const [kidFirstName, setKidFirstName] = React.useState('');
	const [kidCitizenship, setKidCitizenship] = React.useState('');
	const [identifier, setIdentifier] = React.useState('');
	const [pass, setPass] = React.useState('');
	const [errorMessage, setError] = React.useState('');
	const [kids, setKids] = React.useState([]);

	const classes = useStyles();
	const router = useRouter();
	return (
		<>
			<Head>
				<title> Consular Registration - Djibouti Abroad </title>
			</Head>
			<Container maxWidth='lg'>
				{' '}
				<Grid container>
					<Grid item xs={12} className={classes.topColorGreen}>
						{' '}
						<Typography
							variant='h2'
							style={{ fontWeight: 'bold' }}>
							{' '}
							{`Consular registration`}
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.titleContainer}>
						<Typography
							gutterBottom
							variant='h6'
							style={{ marginTop: '0.5rem' }}>
							Here you can provide information about where you
							are and how you can be contacted during your stay
							abroad. If necessary, the information can be used
							by the Ministry of Foreign Affairs or the embassy
							to contact you should a consular crisis situation
							occur. They are saved for the time period you
							specify, however, a maximum of one year. If you
							are planning a stay longer than one year, an
							annual renewal is required. You can unsubscribe
							yourself whenever you want.
						</Typography>
					</Grid>
					<Grid item className={classes.secondRow}>
						<Grid container justify='center'>
							<Grid item xs={12}>
								<div
									style={{
										marginBottom: '2rem',
										textAlign: 'center',
									}}>
									<Button
										variant='outlined'
										className={classes.largeBtn}
										onClick={() => {
											document.getElementById(
												'reg'
											).style.display = 'block';
											document.getElementById(
												'submitBtn'
											).style.display = 'block';
											document.getElementById(
												'login'
											).style.display = 'none';
										}}>
										{' '}
										Registration Form{' '}
									</Button>
									<Button
										variant='outlined'
										className={classes.largeBtn}
										onClick={() => {
											document.getElementById(
												'reg'
											).style.display = 'none';

											document.getElementById(
												'login'
											).style.display = 'block';
											document.getElementById(
												'submitBtn'
											).style.display = 'block';
										}}>
										{' '}
										Login{' '}
									</Button>
								</div>
							</Grid>
							<Grid item xs={12}>
								<form
									onSubmit={async (e) => {
										e.preventDefault();
										if (country) {
											await fetch('/api/user', {
												method: 'POST',
												headers: {
													'Content-Type':
														'application/json',
												},
												body: JSON.stringify({
													name,
													password,
													firstName,
													email,
													tel,
													personToContact,
													country,
													city,
													arrival,
													departure,
													partnerName,
													partnerFirstName,
													partnerTel,
													partnerEmail,
													partnerCitizenship,
													kids,
													flag: 'Register',
												}),
											}).then(() => {
												setName('');
												setFirstName('');
												setPassword('');
												setEmail('');
												setTel('');
												setEmail('');
												setCity('');
												setPersonToContact('');
												setCountry('');
												setArrival('');
												setDeparture('');
												setpartnerName('');
												setPartnerCitizenship('');
												setPartnerEmail('');
												setpartnerName('');
												setpartnerTel('');
												setKids([...kids]);
												setKidName('');
												setKidCitizenship('');
												setKidFirstName('');

												document.getElementById(
													'reg'
												).style.display = 'none';
											});
										}

										if (!country) {
											await fetch('/api/user', {
												method: 'POST',
												headers: {
													'Content-Type':
														'application/json',
												},
												body: JSON.stringify({
													identifier: identifier,
													pass: pass,
													flag: 'Retrieve',
												}),
											}).then(async (response) => {
												if (response.status === 200) {
													let data =
														await response.json();
													let accessToken = data;

													localStorage.setItem(
														'accessToken',
														JSON.stringify(accessToken)
													);

													router.push({
														pathname: '/userInfo/[id]',
														query: {
															id: accessToken._id,
														},
													});
												}

												if (response.status !== 200) {
													setError(
														'User not found. Please check you credentials '
													);
												}
											});
										}
									}}>
									<div className={classes.boxContainer}>
										<div
											className={classes.formContainer}
											id='reg'>
											<div className={classes.gridSpace}>
												<div
													className={classes.titleSpace}>
													<Typography variant='h6'>
														{' '}
														Personal information{' '}
													</Typography>
												</div>
												<TextField
													className={classes.textField}
													label='First name'
													variant='standard'
													value={firstName}
													onChange={(e) =>
														setFirstName(e.target.value)
													}
												/>
												<TextField
													className={
														classes.secondTextField
													}
													label='Name'
													variant='standard'
													value={name}
													onChange={(e) =>
														setName(e.target.value)
													}
												/>
											</div>
											<div className={classes.gridSpace}>
												<div
													className={classes.titleSpace}>
													<Typography variant='h6'>
														{' '}
														Contact information{' '}
													</Typography>
												</div>
												<TextField
													className={classes.textField}
													label='Email'
													value={email}
													onChange={(e) =>
														setEmail(e.target.value)
													}
													variant='standard'
												/>
												<TextField
													className={
														classes.secondTextField
													}
													label='Telephone'
													variant='standard'
													value={tel}
													onChange={(e) =>
														setTel(e.target.value)
													}
												/>
												<TextField
													className={
														classes.secondTextField
													}
													label='Contact person number '
													variant='standard'
													value={personToContact}
													onChange={(e) =>
														setPersonToContact(
															e.target.value
														)
													}
												/>
											</div>
											<div className={classes.gridSpace}>
												<div
													className={classes.titleSpace}>
													<Typography variant='h6'>
														{' '}
														Address information abroad{' '}
													</Typography>
												</div>
												<TextField
													className={classes.textField}
													label='Country'
													variant='standard'
													value={country}
													onChange={(e) =>
														setCountry(e.target.value)
													}
												/>
												<TextField
													className={
														classes.secondTextField
													}
													label='City'
													variant='standard'
													value={city}
													onChange={(e) =>
														setCity(e.target.value)
													}
												/>
											</div>
											<div
												className={classes.gridSpace}
												style={{ marginBottom: '2rem' }}>
												<div
													className={classes.titleSpace}>
													<Typography variant='h6'>
														{' '}
														Arrival and departure{' '}
													</Typography>
												</div>
												<TextField
													className={classes.textField}
													label='Arrival'
													variant='standard'
													value={arrival}
													onChange={(e) =>
														setArrival(e.target.value)
													}
												/>
												<TextField
													className={
														classes.secondTextField
													}
													label='Departure'
													variant='standard'
													value={departure}
													onChange={(e) =>
														setDeparture(e.target.value)
													}
												/>
												<TextField
													className={
														classes.secondTextField
													}
													label='Password'
													variant='standard'
													value={password}
													onChange={(e) =>
														setPassword(e.target.value)
													}
												/>
											</div>

											<div
												className={classes.btnContainer}>
												<Button
													size='large'
													onClick={() => {
														if (
															document.getElementById(
																'show'
															).style.display ===
															'block'
														) {
															document.getElementById(
																'show'
															).style.display = 'none';
														} else {
															document.getElementById(
																'show'
															).style.display =
																'block';
														}
													}}
													className={classes.btn}
													variant='outlined'>
													{' '}
													Add accompanying partner{' '}
												</Button>
											</div>
											<div
												className={classes.show}
												id='show'>
												{' '}
												<Grid
													item
													className={classes.gridSpace}>
													<div
														className={
															classes.titleSpace
														}>
														<Typography variant='h6'>
															{' '}
															Personal information{' '}
														</Typography>
													</div>
													<TextField
														className={
															classes.textField
														}
														label='Name'
														variant='standard'
														value={partnerName}
														onChange={(e) =>
															setpartnerName(
																e.target.value
															)
														}
													/>
													<TextField
														className={
															classes.secondTextField
														}
														label='First name'
														variant='standard'
														value={partnerFirstName}
														onChange={(e) =>
															setPartnerFirstName(
																e.target.value
															)
														}
													/>
												</Grid>
												<Grid
													item
													className={classes.gridSpace}>
													<div
														className={
															classes.titleSpace
														}>
														<Typography variant='h6'>
															{' '}
															Contact information{' '}
														</Typography>
													</div>
													<TextField
														className={
															classes.textField
														}
														label='Citizenship'
														variant='standard'
														value={partnerCitizenship}
														onChange={(e) =>
															setPartnerCitizenship(
																e.target.value
															)
														}
													/>
													<TextField
														className={
															classes.secondTextField
														}
														label='Email'
														variant='standard'
														value={partnerEmail}
														onChange={(e) =>
															setPartnerEmail(
																e.target.value
															)
														}
													/>
													<TextField
														className={
															classes.secondTextField
														}
														label='Telephone'
														variant='standard'
														value={partnerTel}
														onChange={(e) =>
															setpartnerTel(
																e.target.value
															)
														}
													/>
												</Grid>
											</div>

											<div
												className={classes.btnContainer}>
												<Button
													size='large'
													onClick={() => {
														if (
															document.getElementById(
																'show2'
															).style.display ===
															'block'
														) {
															document.getElementById(
																'show2'
															).style.display = 'none';
														} else {
															document.getElementById(
																'show2'
															).style.display =
																'block';
														}
													}}
													className={classes.btn}
													variant='outlined'>
													{' '}
													Add accompanying child{' '}
												</Button>
											</div>
											<div
												className={classes.show}
												id='show2'>
												<Grid
													item
													className={classes.gridSpace}>
													<div
														className={
															classes.titleSpace
														}>
														<Typography variant='h6'>
															{' '}
															Child{' '}
															{`${kids.length || 1}`}
														</Typography>
													</div>
													<TextField
														className={
															classes.textField
														}
														label='Name'
														variant='standard'
														value={kidName}
														onChange={(e) => {
															setKidName(
																e.target.value
															);
														}}
													/>
													<TextField
														className={
															classes.secondTextField
														}
														label='First name'
														variant='standard'
														value={kidFirstName}
														onChange={(e) => {
															setKidFirstName(
																e.target.value
															);
														}}
													/>
													<TextField
														className={
															classes.secondTextField
														}
														label='Citizenship'
														variant='standard'
														value={kidCitizenship}
														onChange={(e) => {
															setKidCitizenship(
																e.target.value
															);
														}}
													/>

													<div
														className={
															classes.btnContainer
														}>
														{/**
														 * If there are more than one kid
														 * push new kid in the array
														 */}
														<Button
															className={classes.btn}
															variant='outlined'
															onClick={() => {
																setKids(
																	(initialArr) => [
																		...initialArr,
																		{
																			id: new Date().getMilliseconds(),
																			name: kidName,
																			firstName:
																				kidFirstName,
																			citizenship:
																				kidCitizenship,
																		},
																	]
																);

																setKidCitizenship('');
																setKidFirstName('');
																setKidName('');
															}}>
															{' '}
															Add another kid{' '}
														</Button>
													</div>
												</Grid>
											</div>
										</div>

										<div
											id='login'
											className={classes.formContainer}>
											<div className={classes.titleSpace}>
												<Typography variant='h6'>
													{' '}
													Login information{' '}
												</Typography>
											</div>

											<TextField
												className={classes.textField}
												label='Name'
												variant='standard'
												value={identifier}
												onChange={(e) =>
													setIdentifier(e.target.value)
												}
											/>
											<TextField
												className={
													classes.secondTextField
												}
												label='Password'
												type='password'
												variant='standard'
												value={pass}
												onChange={(e) =>
													setPass(e.target.value)
												}
											/>

											<div
												style={{
													textAlign: 'center',
													marginTop: '1rem',
												}}>
												<Typography
													color='secondary'
													variant='body2'>
													{' '}
													{errorMessage}{' '}
												</Typography>
											</div>
										</div>
										<div className={classes.btnContainer}>
											<Button
												id='submitBtn'
												type='submit'
												style={{
													width: '56%',
													backgroundColor: '#234924',
													color: '#fff',
													display: 'none',
													margin: '0 auto',
												}}
												size='large'
												variant='outlined'>
												{' '}
												Submit
											</Button>
										</div>
									</div>
								</form>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
