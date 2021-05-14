//import styles from '../styles/index.module.scss';
import React from 'react';
import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';
import {
	Button,
	Card,
	Grid,
	Typography,
	Container,
} from '@material-ui/core';
import {
	faArrowAltCircleRight,
	faInfo,
	faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import Countries from '../components/countries';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topColorWhite: {
			[theme.breakpoints.down(650)]: {
				marginBottom: '-9rem',
				paddingTop: '2rem',
			},
		},
		titleContainer: {
			width: '100%',
			paddingTop: '3rem',
			paddingLeft: '1rem',
			paddingRight: '1rem',

			[theme.breakpoints.up(1050)]: {
				//paddingTop: '2%',
			},
			[theme.breakpoints.up(1201)]: {
				//paddingTop: '3%',
			},

			[theme.breakpoints.up(651)]: {
				width: '50%',
				//paddingTop: '2rem',
			},
		},

		imgContainer: {
			width: '50%',
			[theme.breakpoints.up(651)]: {
				width: '300px',
				position: 'absolute',
				left: '50%',
				right: '50%',
				top: '40%',
			},
			[theme.breakpoints.up(900)]: {
				top: '20%',
			},

			[theme.breakpoints.up(1100)]: {
				width: '500px',
				position: 'relative',
				right: '0',
				left: '0',
				top: '0',
			},
		},

		img: {
			[theme.breakpoints.down(651)]: {
				display: 'none !important',
			},

			[theme.breakpoints.up(651)]: {
				position: 'absolute',
				top: '50%',
			},
		},

		secondGreen: {
			marginTop: '5rem',
			paddingTop: '2rem ',
			paddingBottom: '7rem',
			backgroundColor: '#edf4ed',
		},

		carteContainer: {
			padding: '1rem',
			[theme.breakpoints.down(650)]: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			},
		},

		carte: {
			padding: '2rem',
			height: '230px',
			width: '350px',
		},

		btn: {
			margin: '1rem',
			color: '#fff',
			width: '180px',
			height: '70px',
		},

		icon: {
			marginRight: '1rem',
			height: '15px',
			width: '15px',
		},
		url: {
			' &:hover': {
				fontWeight: 'bold',
			},
		},
	})
);

const travelInfoLinks = [
	{
		id: '2',
		title: 'Travel information',
		url: '/foreignPol',
		target: '',
	},
	{
		id: '3',
		title: 'Help for Djibouti nationals',
		url: '/forDjiboutian',
		target: '',
	},
	{
		id: '1',
		title: 'About the Coronavirus',
		url: '/aboutCovid',
		target: '',
	},
];
const forForeignersLinks = [
	{
		id: '2',
		title: 'Visiting Djibouti',
		url: 'https://guide.visitdjibouti.dj/',
		target: '_blank',
	},
	{
		id: '3',
		title: 'Investing in Djibouti',
		url: '/investInDjib',
		target: '',
	},
	{
		id: '1',
		title: 'Working in Djibouti',
		url: '/workingInDjib',
		target: '',
	},
];

export default function Home() {
	const [age, setAge] = React.useState('');
	const classes = useStyles();
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<>
			<main>
				<Container maxWidth='lg'>
					<Grid container className={classes.topColorWhite}>
						<Grid item className={classes.titleContainer}>
							<Typography
								variant='h2'
								style={{ marginBottom: '2rem' }}>
								Djibouti abroad{' '}
							</Typography>
							<Typography variant='h5'>
								Welcome to the official website of Djibouti
								embassies and consulates. Here are gathered
								information, recommendations and contacts of
								embassies and consulates.
							</Typography>
							<Typography
								style={{
									textAlign: 'center',
									marginTop: '3rem',
								}}>
								<Link href='/forDjiboutian'>
									<Button
										className={classes.btn}
										variant='contained'
										style={{
											backgroundColor: '#234924',
										}}>
										{' '}
										For Djibouti nationals{' '}
									</Button>
								</Link>
								<Link href='/forForeigners'>
									<Button
										className={classes.btn}
										variant='contained'
										style={{
											backgroundColor: '#fff',
											color: '#234924',
										}}>
										{' '}
										For foreigners{' '}
									</Button>
								</Link>
							</Typography>
						</Grid>
						<Grid item className={classes.imgContainer}>
							<Image
								src={
									'/djibouti-watercolor-map-michael-tompsett.jpg'
								}
								layout='responsive'
								width={500}
								height={500}
								alt='djib logo'
								className={classes.img}
							/>
						</Grid>
					</Grid>
				</Container>
				<div className={classes.secondGreen}>
					<Container maxWidth='lg'>
						<Grid container justify='center'>
							<Grid item xs={12}>
								<Typography
									variant='h5'
									style={{ margin: '2rem 0' }}>
									{' '}
									<FontAwesomeIcon
										style={{
											height: '40px',
											width: '40px',
											marginRight: '1rem',
											position: 'relative',
											top: '.7rem',
										}}
										icon={faQuestionCircle}
									/>
									Some of our services{' '}
								</Typography>
							</Grid>
							<Grid item className={classes.carteContainer}>
								<Card className={classes.carte}>
									<Typography variant='h6' component='h1'>
										{' '}
										Travel or live abroad{' '}
									</Typography>
									<Typography variant='body1'>
										Here you will find:
									</Typography>
									<ul style={{ listStyle: 'none' }}>
										{travelInfoLinks.map((item) => {
											return (
												<li key={item.id}>
													<Typography
														className={classes.url}>
														<Link href={item.url}>
															<a target={item.target}>
																<FontAwesomeIcon
																	style={{
																		marginRight:
																			'1rem',
																		height: '15px',
																		width: '15px',
																	}}
																	icon={
																		faArrowAltCircleRight
																	}
																/>
																{item.title}
															</a>
														</Link>
													</Typography>
												</li>
											);
										})}
									</ul>
								</Card>
							</Grid>
							<Grid item className={classes.carteContainer}>
								<Card className={classes.carte}>
									<Typography variant='h6'>
										{' '}
										Going to Djibouti?
									</Typography>
									<Typography variant='body1'>
										Visas and immigration
									</Typography>
									<ul style={{ listStyle: 'none' }}>
										{forForeignersLinks.map((item) => {
											return (
												<li key={item.id}>
													<Typography
														className={classes.url}>
														<Link href={item.url}>
															<a target={item.target}>
																<FontAwesomeIcon
																	style={{
																		marginRight:
																			'1rem',
																		height: '15px',
																		width: '15px',
																	}}
																	icon={
																		faArrowAltCircleRight
																	}
																/>
																{item.title}
															</a>
														</Link>
													</Typography>
												</li>
											);
										})}
									</ul>
								</Card>
							</Grid>
						</Grid>
					</Container>
				</div>
				<Container maxWidth='lg'>
					<Grid item xs={12} style={{ marginBottom: '13rem' }}>
						<Typography
							variant='h5'
							style={{
								marginTop: '5rem ',
								marginBottom: '3rem',
							}}>
							<FontAwesomeIcon
								style={{
									height: '40px',
									width: '40px',
									marginRight: '1rem',
									position: 'relative',
									top: '.5rem',
								}}
								icon={faInfo}
							/>{' '}
							Information{' '}
						</Typography>
						<Card elevation={2} style={{ padding: '3rem' }}>
							<Typography variant='h5'>
								Information about the Ministry of Foreign
								Affairs' advice due to covid-19
							</Typography>
							<br />
							<Typography variant='body1'>
								The Ministry of Foreign Affairs advises
								against unnecessary travel to all countries .
								The Ministry of Foreign Affairs has, through
								previous decisions, repealed advised against
								unnecessary travel to most countries.
							</Typography>{' '}
							<Link href='/aboutCovid'>
								<Button
									size='large'
									style={{
										backgroundColor: '#234924',
										color: '#fff',
										marginTop: '2rem',
									}}
									variant='contained'>
									{' '}
									Read more
								</Button>
							</Link>
						</Card>
					</Grid>
				</Container>
				<div
					style={{
						marginTop: '5rem',
						paddingTop: '2rem ',
						paddingBottom: '5rem',
						backgroundColor: '#edf4ed',
					}}>
					<Container maxWidth='lg'>
						<Grid
							container
							style={{
								padding: '1rem',
								marginTop: '2rem',
							}}>
							<Grid item xs={12}>
								<Typography
									variant='h5'
									style={{
										marginTop: '2rem',
										marginBottom: '2rem',
									}}>
									{' '}
									Embassies and Consulates General
								</Typography>
								<Typography
									variant='body1'
									style={{ paddingRight: ' 2rem' }}>
									Djibouti has through the Ministry of
									Foreign Affairs diplomatic relations with
									other countries and international
									organizations and responsible for
									internationally development cooperation and
									trade policy. Djibouti's foreign
									representation consists of about 30 foreign
									authorities.
								</Typography>
								<div>
									<Typography
										variant='h5'
										style={{ marginTop: '2rem' }}>
										Find embassies, consulates general and
										representations:{' '}
									</Typography>
									<Countries />
								</div>
							</Grid>
						</Grid>
					</Container>
				</div>
			</main>
		</>
	);
}
