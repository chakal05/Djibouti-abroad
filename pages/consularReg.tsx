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
import React from 'react';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topColorGreen: {
			backgroundColor: '#edf4ed',
			padding: '3rem',
			borderTopLeftRadius: '1rem',
			borderTopRightRadius: '1rem',
			borderBottomLeftRadius: '1rem',
			// [theme.breakpoints.down(650)]: {
			// 	marginBottom: '-9rem',
			// 	paddingTop: '2rem',
			// },
		},
		titleContainer: {
			padding: '3rem',
			width: '100%',
			textAlign: 'center',
			// paddingTop: '3rem',
			// paddingLeft: '1rem',
			// paddingRight: '1rem',
			// [theme.breakpoints.up(1100)]: {
			// 	//	paddingTop: '5rem',
			// },
			// [theme.breakpoints.up(651)]: {
			// 	width: '50%',
			//     paddingTop: '20%',
			//     paddingLeft:'2rem',
			//     paddingRight:'2rem'
			// },
		},

		imgContainer: {
			// backgroundColor: '#edf4ed',
			// padding: '1rem',
			// borderBottomRightRadius: '1rem',
			// borderBottomLeftRadius: '1rem',

			width: '100%',
			margin: '0 auto',

			//textAlign: 'center',
			[theme.breakpoints.up(651)]: {
				//	width: '50%',
				// 	position: 'absolute',
				// 	right: '3rem',
				// 	top: '30%',
				// 	marginLeft: '1rem',
			},
			// [theme.breakpoints.up(900)]: {
			// 	top: '20%',
			// },
			// [theme.breakpoints.up(1100)]: {
			// 	width: '500px',
			// 	position: 'relative',
			// 	right: '0',
			// 	left: '0',
			// 	top: '0',
			// },
		},

		// img: {
		// 	[theme.breakpoints.down(650)]: {
		// 		display: 'none !important',
		// 	},

		// 	[theme.breakpoints.up(651)]: {
		// 		position: 'absolute',
		// 		top: '50%',
		// 	},
		// },

		formContainer: {
			display: 'none',
			width: '70%',
			margin: '0 auto',
			// 	padding: '1rem',
			[theme.breakpoints.down(650)]: {
				// 		display: 'flex',
				// 		justifyContent: 'center',
				// 		alignItems: 'center',
				width: '100%',
			},
		},

		// carte: {
		// 	padding: '1rem',
		// 	height: '200px',
		// 	width: '400px',
		// 	margin: '1rem',
		// },
		// url: {
		// 	' &:hover': {
		// 		fontWeight: 'bold',
		// 	},
		// },

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
	const [partnerCitizenship, setPartnerCitizenship] = React.useState(
		''
	);
	const [kidName, setKidName] = React.useState('');
	const [kidFirstName, setKidFirstName] = React.useState('');
	const [kidCitizenship, setKidCitizenship] = React.useState('');
	const [identifier, setIdentifier] = React.useState('');
	const [pass, setPass] = React.useState('');

    const classes = useStyles();
    const router = useRouter()
	return (
		<main>
			<Container maxWidth='lg'>
				{' '}
				<Grid container>
					<Grid item xs={12} className={classes.topColorGreen}>
						{' '}
						<Typography variant='h3'>
							{' '}
							{`Consular registration`}
						</Typography>
					</Grid>
					<Grid item className={classes.titleContainer}>
						<div style={{ marginBottom: '1rem' }}>
							{' '}
							<Typography variant='h4' gutterBottom>
								Text de presentation
							</Typography>
						</div>
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
					<Grid item className={classes.imgContainer}>
						<Grid container justify='center'>
							<Grid item xs={12}>
								<div
									style={{
										marginBottom: '2rem',
										textAlign: 'center',
									}}>
									<Button
										variant='outlined'
										style={{
											margin: '.5rem',
											width: '200px',
											height: '150px',
										}}
										onClick={() => {
											document.getElementById(
												'reg'
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
										style={{
											margin: '.5rem',
											width: '200px',
											height: '150px',
										}}
										onClick={() => {
											document.getElementById(
												'reg'
											).style.display = 'none';

											document.getElementById(
												'login'
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

										const payload = {
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
											kidName,
											kidFirstName,
											kidCitizenship,
										};
										if (payload.country) {
										await fetch('/api/user', {
												method: 'POST',
												headers: {
													'Content-Type':
														'application/json',
												},
												body: JSON.stringify(payload),
											});
										}

										if (!payload.country) {
											let response = await fetch('/api/user', {
												method: 'POST',
												headers: {
													'Content-Type':
														'application/json',
												},
												body: JSON.stringify({
													identifier: identifier,
													pass: pass,
												}),
											});

											if (response.status === 200) {
                                                router.push({
                                                    pathname: '/userInfo',
                                                    query: {},
                                                })
											}
										}
									}}>
									<div
										className={classes.formContainer}
										id='reg'>
										<div>
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
												onChange={(e) =>
													setFirstName(e.target.value)
												}
											/>
											<TextField
												className={
													classes.secondTextField
												}
												label='Name'
												variant='outlined'
												value={name}
												onChange={(e) =>
													setName(e.target.value)
												}
											/>
										</div>
										<div className={classes.gridSpace}>
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
												onChange={(e) =>
													setEmail(e.target.value)
												}
												variant='outlined'
											/>
											<TextField
												className={
													classes.secondTextField
												}
												label='Telephone'
												variant='outlined'
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
												variant='outlined'
												value={personToContact}
												onChange={(e) =>
													setPersonToContact(
														e.target.value
													)
												}
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
												onChange={(e) =>
													setCountry(e.target.value)
												}
											/>
											<TextField
												className={
													classes.secondTextField
												}
												label='City'
												variant='outlined'
												value={city}
												onChange={(e) =>
													setCity(e.target.value)
												}
											/>
										</div>
										<div className={classes.gridSpace}>
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
												onChange={(e) =>
													setArrival(e.target.value)
												}
											/>
											<TextField
												className={
													classes.secondTextField
												}
												label='Departure'
												variant='outlined'
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
												variant='outlined'
												value={password}
												onChange={(e) =>
													setPassword(e.target.value)
												}
											/>
										</div>

										<div
											style={{
												margin: '2rem 0',
											}}>
											<Button
												size='large'
												onClick={() => {
													document.getElementById(
														'show'
													).style.display = 'block';
												}}
												className={classes.btn}
												variant='outlined'>
												{' '}
												Add accompanying partner{' '}
											</Button>
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
														variant='outlined'
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
														variant='outlined'
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
														variant='outlined'
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
														variant='outlined'
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
														variant='outlined'
														value={partnerTel}
														onChange={(e) =>
															setpartnerTel(
																e.target.value
															)
														}
													/>
												</Grid>
											</div>
										</div>
										<div>
											<Button
												size='large'
												onClick={() => {
													document.getElementById(
														'show2'
													).style.display = 'block';
												}}
												className={classes.btn}
												variant='outlined'>
												{' '}
												Add accompanying child{' '}
											</Button>
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
															Personal information{' '}
														</Typography>
													</div>
													<TextField
														className={
															classes.textField
														}
														label='Name'
														variant='outlined'
														value={kidName}
														onChange={(e) =>
															setKidName(
																e.target.value
															)
														}
													/>
													<TextField
														className={
															classes.secondTextField
														}
														label='First name'
														variant='outlined'
														value={kidFirstName}
														onChange={(e) =>
															setKidFirstName(
																e.target.value
															)
														}
													/>
													<TextField
														className={
															classes.secondTextField
														}
														label='Citizenship'
														variant='outlined'
														value={kidCitizenship}
														onChange={(e) =>
															setKidCitizenship(
																e.target.value
															)
														}
													/>
												</Grid>
											</div>
											<div>
												<Button
													type='submit'
													className={classes.btn}
													size='large'
													style={{
														marginTop: '1rem',
													}}
													variant='outlined'>
													{' '}
													Submit
												</Button>
											</div>
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
											variant='outlined'
											value={identifier}
											onChange={(e) =>
												setIdentifier(e.target.value)
											}
										/>
										<TextField
											className={classes.secondTextField}
											label='Password'
											type='password'
											variant='outlined'
											value={pass}
											onChange={(e) =>
												setPass(e.target.value)
											}
										/>
										<div>
											<Button
												type='submit'
												className={classes.btn}
												size='large'
												style={{
													marginTop: '1rem',
												}}
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
		</main>
	);
}
