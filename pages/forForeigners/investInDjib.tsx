import Head from 'next/head';
import {
	Container,
	Grid,
	Typography,
	Paper,
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
	})
);

const reasons = [
	{
		id: 1,
		title: '1. Location',
		text: `It is located on the 2nd sea route in the world,
    where 60℅ of the world's traffic passes.`,
	},
	{
		id: 2,
		title: '2. Hub',
		text: `The country is strategically positioned in the
        region to serve as a hub for landlocked countries`,
	},
	{
		id: 3,
		title: '3. Politics',
		text: `it enjoys political stability in a region plagued by tribal and civil wars `,
	},
	{
		id: 4,
		title: '4. Free market',
		text: `Both nationals and foreigners enjoy the same right`,
	},
	{
		id: 5,
		title: '5. Currency',
		text: `Its currency is pegged to the US dollar and is
        freely convertible, with a low rate of inflation`,
	},
	{
		id: 6,
		title: '6. Financial system ',
		text: `It has a financial system, without exchange
        controls, allows a completely free currency transfer`,
	},
	{
		id: 7,
		title: '7. Development-oriented',
		text: `Its economy is development-oriented and in full
        swing (like major infrastructure projects)`,
	},
	{
		id: 8,
		title: '8. Telecommunication',
		text: `Its telecom system ranks it among the best in
        Africa, with SEA ME WE and EIG submarine cable
        station`,
	},
	{
		id: 9,
		title: '9. Investments',
		text: `Investment operations in the country are
        eligible for funding and coverage
        insurance of regional financial institutions
        and international`,
	},
	{
		id: 10,
		title: '10. Gateway',
		text: `Djibouti is a natural gateway to a market of over
        400 million inhabitants`,
	},
];

export default function investInDjib() {
	const classes = useStyles();
	return (
		<>
			<Head>
				{' '}
				<title> Invest in Djibouti - Djibouti Abroad </title>{' '}
			</Head>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item xs={12} className={classes.topColorGreen}>
						{' '}
						<Typography
							variant='h2'
							style={{
								fontWeight: 'bold',
							}}>
							{' '}
							Why invest in Djibouti ?{' '}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant='h4'
							style={{
								margin: '3rem 0',
								textAlign: 'center',
							}}>
							10 Reasons to Invest in Djibouti
						</Typography>
						<Grid container justify='center'>
							{reasons.map((item) => {
								return (
									<Grid
										item
										key={item.id}
										className={classes.carteContainer}>
										<Paper
											elevation={5}
											className={classes.carte}>
											<Typography
												variant='h6'
												className={classes.cardTitle}>
												{item.title}
											</Typography>
											<Typography variant='body1'>
												{item.text}
											</Typography>
										</Paper>
									</Grid>
								);
							})}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
