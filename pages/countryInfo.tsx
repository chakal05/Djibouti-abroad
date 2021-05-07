import { useRouter } from 'next/router';
import { Container, Grid, Typography } from '@material-ui/core';
import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';
import { countriesInfo } from '../components/countriesData';
import Countries from '../components/countries';

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

// const countriesInfo = [
// 	{
// 		id: '1',
// 		name: 'Kenya',
// 		officicalName: 'Republic of Kenya',
// 		regime: 'Republic',
// 		headOfState: 'M.Uhuru Kenyatta',
// 		area: '580 367 km2',
// 		capital: 'Nairobi',
// 		mainCities: [
// 			'Nairobie',
// 			'Mombasa',
// 			'Kisumu',
// 			'Eldoret',
// 			'Nyeri',
// 			'Meru',
// 			'Embu',
// 		],
// 		officialLanguage: ['English', 'Swahili'],
// 		localLanguages: ['Swahili and 40+ others languages'],
// 		currency: 'Kenyan Shilling -- 1 EUR= 132,67 KES (Janvier 2020)',
// 		nationalDay: 'December 12',
// 		population: '53,8 millions (ONU, 2020)',
// 		density: '85,3 habitants/km2',
// 		populationGrowth: '2,3%',
// 		lifeExpectacy: '66,2 years',
// 		literacyRate: '87,8% (Banque Mondiale, 2018)',
// 		indexOfDev: '0,579 -- 185e of 228 (2018)',
// 		religions: [
// 			'Protestants 45 % ',
// 			'Catholiques 33 % ',
// 			'Musulmans 10 %',
// 			'Animistes 10 % ',
// 			'autres 2 %',
// 		],
// 	},
// ];

function Search() {
	const router = useRouter();
	const country = router.query.country;
	const classes = useStyles();

	return (
		<Grid container>
			{country === undefined && (
				<Grid item className={classes.topColorWhite} xs={12}>
					{' '}
					<Typography variant='h3'>
						Diplomatic Missions
					</Typography>
				</Grid>
			)}
			<Grid
				item
				xs={12}
				style={{
					textAlign: 'center',
					margin: '3rem 0',
				}}>
				<Typography
					variant='h4'
					style={{
						marginTop: '2rem',
						marginBottom: '2rem',
					}}>
					{' '}
					Embassies and Consulates General
				</Typography>
				<Typography
					variant='body1'
					style={{ width: '70%', margin: '0 auto' }}>
					Djibouti has through the Ministry of Foreign Affairs
					diplomatic relations with other countries and
					international organizations and responsible for
					internationally development cooperation and trade
					policy. Sweden's foreign representation consists of
					about 100 foreign authorities.
				</Typography>
				<div>
					<Typography variant='h5' style={{ marginTop: '2rem' }}>
						Find embassies, consulates general and
						representations:{' '}
					</Typography>
					<Countries />
				</div>
			</Grid>
		</Grid>
	);
}

/**
 * TODO -- Change classe names and var names
 */

export default function diploMiss() {
	const router = useRouter();
	const country = router.query.country;
	const classes = useStyles();

	return (
		<main>
			<Container maxWidth='lg'>
				{country === undefined && <Search />}

				{country !== undefined && (
					<Grid container>
						<Grid
							item
							className={classes.topColorWhite}
							xs={12}>
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
													Head of state:{' '}
													{item.headOfState}
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
													{item.mainCities.map(
														(el) => `${el}, `
													)}
												</Typography>
												<Typography
													gutterBottom
													variant='body2'>
													{' '}
													Official Languages:{' '}
													{item.officialLanguage.map(
														(el) => `${el}, `
													)}
												</Typography>{' '}
												<Typography
													gutterBottom
													variant='body2'>
													{' '}
													Main spoken languages:{' '}
													{item.localLanguages.map(
														(el) => `${el}, `
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
													National day:{' '}
													{item.nationalDay}
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
													Literacy rate:{' '}
													{item.literacyRate}
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
							{countriesInfo.map((el) => {
								if (el.name === country) {
									return (
										<div>
											<div>
												<Typography
													gutterBottom
													variant='h6'
													style={{ marginTop: '2rem' }}>
													Djibouti in {country}
												</Typography>
												<Typography
													gutterBottom
													variant='body2'>
													{' '}
													Ambassador:{' '}
													{el.djibInCountry.ambassador}
												</Typography>
												<Typography
													gutterBottom
													variant='body2'>
													{' '}
													Tel: {el.djibInCountry.tel}
												</Typography>
												<Typography
													gutterBottom
													variant='body2'>
													{' '}
													Fax:{el.djibInCountry.fax}
												</Typography>
												<Typography
													gutterBottom
													variant='body2'>
													Adress:{' '}
													{el.djibInCountry.adress}
												</Typography>
												<Typography
													gutterBottom
													variant='body2'>
													Email: {el.djibInCountry.email}
												</Typography>
											</div>{' '}
											{el.countryInDjib.ambassador !==
												'' && (
												<div>
													<Typography
														gutterBottom
														variant='h6'
														style={{
															marginTop: '2rem',
														}}>
														{country} in Djibouti{' '}
													</Typography>
													<Typography
														gutterBottom
														variant='body2'>
														{' '}
														Ambassador:{' '}
														{
															el.countryInDjib
																.ambassador
														}
													</Typography>
													<Typography
														gutterBottom
														variant='body2'>
														{' '}
														Tel: {el.countryInDjib.tel}
													</Typography>
													<Typography
														gutterBottom
														variant='body2'>
														{' '}
														Fax:{el.countryInDjib.fax}
													</Typography>
													<Typography
														gutterBottom
														variant='body2'>
														Adress:{' '}
														{el.countryInDjib.adress}
													</Typography>
													<Typography
														gutterBottom
														variant='body2'>
														Email:{' '}
														{el.countryInDjib.email}
													</Typography>
												</div>
											)}
										</div>
									);
								}
							})}
						</Grid>
						<Search />
					</Grid>
				)}
			</Container>
		</main>
	);
}
