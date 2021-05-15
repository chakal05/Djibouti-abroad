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

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topColorGreen: {
			backgroundColor: '#edf4ed',
			padding: '3rem',
			borderTopLeftRadius: '1rem',
			borderTopRightRadius: '1rem',
			borderBottomLeftRadius: '1rem',
			borderBottomRightRadius: '1rem',
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
			marginTop: '1rem',
			padding: '2rem',
			// borderBottomRightRadius: '1rem',
			// borderBottomLeftRadius: '1rem',

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

export default function AboutCovid() {
	const classes = useStyles();
	return (
		<Container maxWidth='lg'>
			<Grid container>
				<Grid item xs={12} className={classes.topColorGreen}>
					{' '}
					<Typography variant='h3'> About Covid</Typography>
				</Grid>

				<Grid item xs={12} className={classes.imgContainer}>
					<Typography
						variant='h5'
						style={{ marginBottom: '1rem' }}>
						TRAVEL ADVICE IN RESPECT OF THE CORONAVIRUS
					</Typography>
					<Typography variant='h6'>
						International Restrictions:
					</Typography>
					<Typography variant='body1'>
						Djiboutian air, sea and land borders are open. You
						should contact airlines direct to get details of
						scheduled flights. The train service to and from
						Addis Ababa in Ethiopia has reopened but only for
						freight. No date has been advertised for the
				 		reopening of passenger services. When leaving
						Djibouti, you may need to provide evidence of a
						negative test to airport authorities prior to
						departure, if required at your destination or for
						transit. You should contact your airline to check
						requirements.
					</Typography>
					<br />
					<Typography variant='h6'>
						Entry to Djibouti:
					</Typography>
					<Typography variant='body1'>
						Passengers who started their journeys or transited
						South Africa, India or Brazil will not be allowed to
						enter Djibouti due to increasing concerns about
						COVID-19 variants. Djiboutian Nationals are not
						allowed to travel to those countries. Djiboutian
						Residents should double check with their airline
						before planning to travel to those countries.
						Whether arriving by air, land or sea, you will be
						required to provide a PCR test certificate from the
						country where you started your journey. The test
						must be taken within 72 hours before you leave your
						destination and within 120 hours of your arrival in
						Djibouti. You should arrange to take a private test.
						On arrival at all entry points (land, air or sea),
						if you are older than 11 years, you will be tested
						for COVID-19 which can take up to an hour You should
						not eat anything 30 minutes before your arrival at
						the entry point. You will have to pay for the test
						either by credit card, but as the credit card
						machines do not always work, cash (dollars, euros
						accepted) is a more reliable method of payment. If
						the result is positive you will contacted at your
						accommodation and be taken to a government
						designated quarantine hotel or hospital and remain
						in quarantine until you test negative. You will
						cover accommodation costs.
					</Typography>
					<br />
					<Typography variant='h6'>
						Internal Restrictions:{' '}
					</Typography>
					<Typography variant='body1'>
						Local measure: Face coverings must be worn in public
						and private spaces where social distancing is not
						possible. Restaurants, shops are open with social
						distancing measures in place.
					</Typography>
					<br />
					<Typography variant='h6'>
						Accommodation:
					</Typography>{' '}
					<Typography variant='body1'>
						{' '}
						Hotels were permitted to reopen from 30 June 2020
						with social distancing measures in place.
					</Typography>
					<br />
					<Typography variant='h6'>
						Public places and services:{' '}
					</Typography>{' '}
					<Typography variant='body1'>
						{' '}
						Gatherings of more than 10 people are prohibited.
						Government offices and places of worship have
						reopened with social distancing in place.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}
