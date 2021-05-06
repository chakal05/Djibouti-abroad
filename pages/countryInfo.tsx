import { useRouter } from 'next/router';
import { Container, Grid, Typography, Card } from '@material-ui/core';
import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topColorWhite: {
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
			padding: '1rem',
			width: '100%',
			// paddingTop: '3rem',
			// paddingLeft: '1rem',
			// paddingRight: '1rem',
			// [theme.breakpoints.up(1100)]: {
			// 	//	paddingTop: '5rem',
			// },
			[theme.breakpoints.up(751)]: {
				width: '70%',
				//paddingTop: '2rem',
			},
		},

		imgContainer: {
			backgroundColor: '#edf4ed',
			padding: '1rem',
			borderBottomRightRadius: '1rem',
			borderBottomLeftRadius: '1rem',
			width: '100%',
			[theme.breakpoints.up(751)]: {
				width: '30%',
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
	})
);

const countriesInfo = [
	{
		id: '1',
		name: 'Kenya',
		officicalName: 'Republic of Kenya',
		regime: 'Republic',
		headOfState: 'M.Uhuru Kenyatta',
		area: '580 367 km2',
		capital: 'Nairobi',
		mainCities: [
			'Nairobie',
			'Mombasa',
			'Kisumu',
			'Eldoret',
			'Nyeri',
			'Meru',
			'Embu',
		],
		officialLanguage: ['English', 'Swahili'],
		localLanguages: ['Swahili and 40+ others languages'],
		currency: 'Kenyan Shilling -- 1 EUR= 132,67 KES (Janvier 2020)',
		nationalDay: 'December 12',
		population: '53,8 millions (ONU, 2020)',
		density: '85,3 habitants/km2',
		populationGrowth: '2,3%',
		lifeExpectacy: '66,2 years',
		literacyRate: '87,8% (Banque Mondiale, 2018)',
		indexOfDev: '0,579 -- 185e of 228 (2018)',
		religions: [
			'Protestants 45 % ',
			'Catholiques 33 % ',
			'Musulmans 10 %',
			'Animistes 10 % ',
			'autres 2 %',
		],
	},
];

export default function diploMiss() {
	const router = useRouter();
	const country = router.query.country;
	const classes = useStyles();

	/**
	 * * TODO
	 * ! Use getStaticProps (with context) or something for better performance
	 *
	 */

	return (
		<main>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item className={classes.topColorWhite} xs={12}>
						{' '}
						<Typography variant='h3'>
							{' '}
							{`Djibouti & ${country}`}
						</Typography>
						<Typography
							gutterBottom
							variant='h5'
							style={{ marginTop: '2rem' }}>
							Presentation of {country}
						</Typography>
					</Grid>
					<Grid item className={classes.titleContainer}>
						{countriesInfo.map((item) => {
							if (item.name === country) {
								return (
									<>
										<div key={item.id}>
											<Typography
												gutterBottom
												variant='h6'
												style={{ marginTop: '2rem' }}
												component='h5'>
												General data
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Official name:{' '}
												{item.officicalName}
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Nature of the regime:{' '}
												{item.regime}
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Head of state: {item.headOfState}
											</Typography>
										</div>
										<div>
											<Typography
												gutterBottom
												variant='h6'
												style={{ marginTop: '2rem' }}>
												Geographical data
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Area: {item.area}
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Capital: {item.capital}
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												Main cities:{' '}
												{item.mainCities.map((el) => el)}
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Official Languages:{' '}
												{item.officialLanguage.map(
													(el) => el
												)}
											</Typography>{' '}
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Main spoken languages:{' '}
												{item.localLanguages.map(
													(el) => el
												)}
											</Typography>{' '}
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Currency: {item.currency}
											</Typography>{' '}
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												National day: {item.nationalDay}
											</Typography>
										</div>
										<div>
											<Typography
												gutterBottom
												variant='h6'
												style={{ marginTop: '2rem' }}>
												Demographical data
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Population: {item.population}
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Density: {item.density}
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Population growth:{' '}
												{item.populationGrowth}
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Life expectancy:{' '}
												{item.lifeExpectacy}
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Literacy rate: {item.literacyRate}
											</Typography>
											<Typography
												gutterBottom
												variant='body2'>
												{' '}
												Index of human development:{' '}
												{item.indexOfDev}
											</Typography>
										</div>
									</>
								);
							}
						})}
					</Grid>
					<Grid item className={classes.imgContainer}>
						{' '}
						<div>
							<Typography
								gutterBottom
								variant='h6'
								style={{ marginTop: '2rem' }}>
								Djiboutian representation
							</Typography>
							<Typography gutterBottom variant='body2'>
								{' '}
								Ambassador:{' '}
							</Typography>
							<Typography gutterBottom variant='body2'>
								{' '}
								Tel:{' '}
							</Typography>
							<Typography gutterBottom variant='body2'>
								{' '}
								Fax:{' '}
							</Typography>
							<Typography gutterBottom variant='body2'>
								Adress:
							</Typography>
							<Typography gutterBottom variant='body2'>
								Email:
							</Typography>
						</div>{' '}
						<div>
							<Typography
								gutterBottom
								variant='h6'
								style={{ marginTop: '2rem' }}>
								{country} representation in Djibouti{' '}
							</Typography>
							<Typography gutterBottom variant='body2'>
								{' '}
								Ambassador:{' '}
							</Typography>
							<Typography gutterBottom variant='body2'>
								{' '}
								Tel:{' '}
							</Typography>
							<Typography gutterBottom variant='body2'>
								{' '}
								Fax:{' '}
							</Typography>
							<Typography gutterBottom variant='body2'>
								Adress:
							</Typography>
							<Typography gutterBottom variant='body2'>
								Email:
							</Typography>
						</div>{' '}
					</Grid>
				</Grid>
			</Container>
		</main>
	);
}
