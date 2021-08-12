import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, Grid, Typography } from '@material-ui/core';
import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';
import { countriesInfo } from '../../components/countriesData';
import Countries from '../../components/countries';

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
			},
		},

		boldText: {
			fontWeight: 'bold',
            marginRight:'0.3rem'
		},
	})
);

function Search() {
	const router = useRouter();
	const country = router.query.country;
	const classes = useStyles();

	return (
		<Grid container>
			{country === undefined && (
				<Grid item className={classes.topColorWhite} xs={12}>
					{' '}
					<Typography
						variant='h2'
						style={{ fontWeight: 'bold' }}>
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
						fontWeight: 'bold',
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

export default function diploMiss() {
	const router = useRouter();
	const country = router.query.country;
	const classes = useStyles();

	return (
		<>
			<Head>
				<title>
					{' '}
					Embassies and Consulates - Djibouti Abroad{' '}
				</title>
			</Head>
			<Container maxWidth='lg'>
				{country === undefined && <Search />}

				{country !== undefined && (
					<Grid container>
						<Grid
							item
							className={classes.topColorWhite}
							xs={12}>
							{' '}
							<Typography
								variant='h3'
								style={{ fontWeight: 'bold' }}>
								{' '}
								{`Djibouti & ${country}`}
							</Typography>
							<Typography
								gutterBottom
								variant='h5'
								style={{
									marginTop: '2rem',
									fontWeight: 'bold',
								}}>
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
													variant='body1'>
													
													<span
														className={
															classes.boldText
														}>
														Official name:
													</span>
													<span>
														{item.officialName}{' '}
													</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														Nature of the regime:{' '}
													</span>
													<span>{item.regime}</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													
													<span
														className={
															classes.boldText
														}>
														{' '}
														Head of state:{' '}
													</span>
													<span>{item.headOfState}</span>
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
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														Area:{' '}
													</span>
													<span>{item.area}</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														{' '}
														Capital:{' '}
													</span>
													<span>{item.capital}</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														Main cities:{' '}
													</span>
													<span>
														{item.mainCities.map(
															(el) => `${el}, `
														)}
													</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														Official Languages:{' '}
													</span>
													<span>
														{item.officialLanguage.map(
															(el) => `${el}, `
														)}
													</span>
												</Typography>{' '}
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														Main spoken languages:{' '}
													</span>
													<span>
														{item.localLanguages.map(
															(el) => `${el}, `
														)}
													</span>
												</Typography>{' '}
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														{' '}
														Currency:{' '}
													</span>
													<span>{item.currency}</span>
												</Typography>{' '}
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														National day:{' '}
													</span>
													<span>{item.nationalDay}</span>
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
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														Population:{' '}
													</span>
													<span>{item.population}</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														{' '}
														Density:{' '}
													</span>
													<span> {item.density}</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														Population growth:{' '}
													</span>
													<span>
														{item.populationGrowth}
													</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														{' '}
														Life expectancy:{' '}
													</span>
													<span>
														{' '}
														{item.lifeExpectacy}
													</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														{' '}
														Literacy rate:{' '}
													</span>
													<span>
														{' '}
														{item.literacyRate}
													</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														{' '}
														Index of human development:{' '}
													</span>
													<span>{item.indexOfDev}</span>
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
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														{' '}
														Ambassador:{' '}
													</span>
													<span>
														{' '}
														{
															el.djibInCountry
																.ambassador
														}
													</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														Tel:{' '}
													</span>
													<span>
														{' '}
														{el.djibInCountry.tel}
													</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														Fax:
													</span>
													<span>
														{' '}
														{el.djibInCountry.fax}
													</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														Adress:{' '}
													</span>
													<span>
														{el.djibInCountry.adress}
													</span>
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													<span
														className={
															classes.boldText
														}>
														{' '}
														Email:
													</span>
													<span>
														{' '}
														{el.djibInCountry.email}
													</span>
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
													{el.countryInDjib
														.ambassador && (
														<Typography
															gutterBottom
															variant='body1'>
															<span
																className={
																	classes.boldText
																}>
																Ambassador:{' '}
															</span>
															<span>
																{
																	el.countryInDjib
																		.ambassador
																}
															</span>
														</Typography>
													)}
													{el.countryInDjib.tel && (
														<Typography
															gutterBottom
															variant='body1'>
															<span
																className={
																	classes.boldText
																}>
																Tel:{' '}
															</span>
															<span>
																{el.countryInDjib.tel}
															</span>
														</Typography>
													)}
													{el.countryInDjib.fax && (
														<Typography
															gutterBottom
															variant='body1'>
															<span
																className={
																	classes.boldText
																}>
																Fax:
															</span>
															<span>
																{el.countryInDjib.fax}
															</span>
														</Typography>
													)}

													{el.countryInDjib.adress && (
														<Typography
															gutterBottom
															variant='body1'>
															<span
																className={
																	classes.boldText
																}>
																{' '}
																Adress:{' '}
															</span>
															<span>
																{
																	el.countryInDjib
																		.adress
																}
															</span>
														</Typography>
													)}
													{el.countryInDjib.email && (
														<Typography
															gutterBottom
															variant='body1'>
															<span
																className={
																	classes.boldText
																}>
																{' '}
																Adress:{' '}
															</span>
															<span>
																{
																	el.countryInDjib
																		.email
																}
															</span>
														</Typography>
													)}
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
		</>
	);
}
