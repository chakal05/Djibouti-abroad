import {
	Container,
	Grid,
	Typography,
	TextField,
	Button,
} from '@material-ui/core';
import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';

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

			width: '90%',
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

		// carteContainer: {
		// 	padding: '1rem',
		// 	[theme.breakpoints.down(650)]: {
		// 		display: 'flex',
		// 		justifyContent: 'center',
		// 		alignItems: 'center',
		// 		width: '100%',
		// 	},
		// },

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

export default function theMinistry() {
	const classes = useStyles();
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
							<form>
								<Grid item>
									<div
										style={{
											marginBottom: '2rem',
											textAlign: 'center',
										}}>
										<Typography variant='h4'>
											{' '}
											Registration Form{' '}
										</Typography>
									</div>
									<div className={classes.titleSpace}>
										<Typography variant='h6'>
											{' '}
											Personal information{' '}
										</Typography>
									</div>
									<TextField
										className={classes.textField}
										id='outlined-basic'
										label='Name'
										variant='outlined'
									/>
									<TextField
										className={classes.secondTextField}
										id='outlined-basic'
										label='Name'
										variant='outlined'
									/>
								</Grid>
								<Grid item className={classes.gridSpace}>
									<div className={classes.titleSpace}>
										<Typography variant='h6'>
											{' '}
											Contact information{' '}
										</Typography>
									</div>
									<TextField
										className={classes.textField}
										id='outlined-basic'
										label='Email'
										variant='outlined'
									/>
									<TextField
										className={classes.secondTextField}
										id='outlined-basic'
										label='Mobil number'
										variant='outlined'
									/>
									<TextField
										className={classes.secondTextField}
										id='outlined-basic'
										label='Contact person number '
										variant='outlined'
									/>
								</Grid>
								<Grid item className={classes.gridSpace}>
									<div className={classes.titleSpace}>
										<Typography variant='h6'>
											{' '}
											Address information abroad{' '}
										</Typography>
									</div>
									<TextField
										className={classes.textField}
										id='outlined-basic'
										label='Country'
										variant='outlined'
									/>
									<TextField
										className={classes.secondTextField}
										id='outlined-basic'
										label='City'
										variant='outlined'
									/>
								</Grid>
								<Grid item className={classes.gridSpace}>
									<div className={classes.titleSpace}>
										<Typography variant='h6'>
											{' '}
											Arrival and departure{' '}
										</Typography>
									</div>
									<TextField
										className={classes.textField}
										id='outlined-basic'
										label='Arrival'
										variant='outlined'
									/>
									<TextField
										className={classes.secondTextField}
										id='outlined-basic'
										label='Departure'
										variant='outlined'
									/>
								</Grid>
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
										variant='contained'>
										{' '}
										Add accompanying partner{' '}
									</Button>
									<div className={classes.show} id='show'>
										{' '}
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
												id='outlined-basic'
												label='Arrival'
												variant='outlined'
											/>
											<TextField
												className={
													classes.secondTextField
												}
												id='outlined-basic'
												label='Departure'
												variant='outlined'
											/>
										</Grid>
										<Grid
											item
											className={classes.gridSpace}>
											<div className={classes.titleSpace}>
												<Typography variant='h6'>
													{' '}
													Contact information{' '}
												</Typography>
											</div>
											<TextField
												className={classes.textField}
												id='outlined-basic'
												label='Arrival'
												variant='outlined'
											/>
											<TextField
												className={
													classes.secondTextField
												}
												id='outlined-basic'
												label='Departure'
												variant='outlined'
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
										variant='contained'>
										{' '}
										Add accompanying child{' '}
									</Button>
									<div className={classes.show} id='show2'>
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
												id='outlined-basic'
												label='Arrival'
												variant='outlined'
											/>
											<TextField
												className={
													classes.secondTextField
												}
												id='outlined-basic'
												label='Departure'
												variant='outlined'
											/>
										</Grid>
										<Grid
											item
											className={classes.gridSpace}>
											<div className={classes.titleSpace}>
												<Typography variant='h6'>
													{' '}
													Contact information{' '}
												</Typography>
											</div>
											<TextField
												className={classes.textField}
												id='outlined-basic'
												label='Arrival'
												variant='outlined'
											/>
											<TextField
												className={
													classes.secondTextField
												}
												id='outlined-basic'
												label='Departure'
												variant='outlined'
											/>
										</Grid>
									</div>
								</div>
								<div>
									<Button
										className={classes.btn}
										size='large'
										style={{ marginTop: '1rem' }}
										variant='contained'>
										{' '}
										Submit
									</Button>
								</div>
							</form>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
}
