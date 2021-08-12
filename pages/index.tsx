//import styles from '../styles/index.module.scss';
import React from 'react';
import Head from 'next/head';
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
	faArrowAltCircleDown,
	faCheckCircle,
	faCheckDouble,
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
			paddingTop: '1rem',
			paddingLeft: '1rem',
			paddingRight: '1rem',

			[theme.breakpoints.up(651)]: {
				width: '50%',
			},
		},

		imgContainer: {
			width: '50%',
			[theme.breakpoints.up(651)]: {
				width: '300px',
				position: 'absolute',
				//	left: '50%',
				right: '3rem',
				top: '25%',
			},
			[theme.breakpoints.up(900)]: {
				top: '20%',
			},

			[theme.breakpoints.up(1100)]: {
				width: '400px',
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
			padding: '2rem 2rem',
			height: '350px',
			width: '370px',
		},

		listHeader: {
			marginBottom: '1rem',
		},

		listContainer: {
			listStyle: 'none',
			paddingLeft: '.5rem',
		},

		btn: {
			margin: '1rem',
			backgroundColor: '#234924',
			color: '#fff',
			'&:hover': {
				backgroundColor: '#fff',
				color: '#234924',
			},
		},

		btnWhite: {
			backgroundColor: '#fff',
			color: '#234924',
			width: '180px',
			height: '70px',
			'&:hover': {
				backgroundColor: '#234924',
				color: '#fff',
			},
		},

		carteBtn: {
			textAlign: 'center',
		},

		icon: {
			marginRight: '1rem',
			height: '15px',
			width: '15px',
		},
		url: {
			margin: '.3rem 0',
		},
		carteTitle: {
			marginBottom: '1rem',
			fontWeight: 'bold',
		},

		carteSecTitle: {
			marginBottom: '1rem',
			fontWeight: 'bold',
		},

		secondaryTitle: {
			marginTop: '5rem ',
			marginBottom: '3rem',
			fontWeight: 'bold',
		},
	})
);

const travelInfoLinks = [
	{
		id: 2,
		title: 'Travel documents',
	},
	{
		id: 3,
		title: 'Help abroad for citizens',
	},
	{
		id: 1,
		title: 'About the Coronavirus',
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
		url: '/forForeigners/investInDjib',
		target: '',
	},
	{
		id: '1',
		title: 'Working in Djibouti',
		url: `/forForeigners/${encodeURIComponent(
			'workingInDjibouti'
		)}`,
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
			<Head>
				<title>Home - Djibouti Abroad </title>
			</Head>
			<Container maxWidth='lg'>
				<Grid container className={classes.topColorWhite}>
					<Grid item className={classes.titleContainer}>
						<Typography
							variant='h2'
							style={{
								marginBottom: '2rem',
								fontWeight: 'bold',
							}}>
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
							<Link href='/forCitizens'>
								<Button
									className={classes.btn}
									variant='contained'
									style={{
										width: '180px',
										height: '70px',
									}}>
									{' '}
									For Djibouti nationals{' '}
								</Button>
							</Link>
							<Link href='/forForeigners'>
								<Button
									variant='contained'
									className={classes.btnWhite}>
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
								className={classes.secondaryTitle}>
								{' '}
								Some of our services{' '}
							</Typography>
						</Grid>
						<Grid item className={classes.carteContainer}>
							<Card className={classes.carte}>
								<Typography
									variant='h5'
									className={classes.carteTitle}>
									{' '}
									Traveling abroad ?
								</Typography>
								<Typography
									variant='body1'
									className={classes.carteSecTitle}>
									Here is important information before and
									during your stay abroad.
								</Typography>

								<ul className={classes.listContainer}>
									{travelInfoLinks.map((item) => {
										return (
											<li key={item.id}>
												<Grid container>
													<Grid item xs={9}>
														<Typography
															variant='body1'
															className={classes.url}>
															{item.title}
														</Typography>
													</Grid>
													<Grid
														item
														xs={3}
														style={{
															textAlign: 'right',
														}}>
														<FontAwesomeIcon
															style={{
																height: '15px',
																width: '15px',
															}}
															icon={faCheckCircle}
														/>
													</Grid>
												</Grid>
											</li>
										);
									})}
								</ul>
								<div className={classes.carteBtn}>
									<Link href='/forCitizens'>
										<Button
											size='large'
											className={classes.btn}
											variant='contained'>
											{' '}
											Read more
										</Button>
									</Link>
								</div>
							</Card>
						</Grid>
						<Grid item className={classes.carteContainer}>
							<Card className={classes.carte}>
								<Typography
									variant='h5'
									className={classes.carteTitle}>
									{' '}
									Going to Djibouti ?
								</Typography>
								<Typography
									variant='body1'
									className={classes.carteSecTitle}>
									Here you will find information about visas
									and immigration.
								</Typography>
								<ul className={classes.listContainer}>
									{forForeignersLinks.map((item) => {
										return (
											<li key={item.id}>
											
													<Grid container>
														<Grid item xs={9}>
														<Typography
															variant='body1'
															className={classes.url}>
															{item.title}
														</Typography>
														</Grid>
														<Grid
															item
															xs={3}
															style={{
																textAlign: 'right',
															}}>
															<FontAwesomeIcon
																style={{
																	height: '15px',
																	width: '15px',
																}}
																icon={faCheckCircle}
															/>
														</Grid>
													</Grid>
											</li>
										);
									})}
								</ul>
								<div className={classes.carteBtn}>
									<Link href='/forCitizens'>
										<Button
											size='large'
											className={classes.btn}
											variant='contained'>
											{' '}
											Read more
										</Button>
									</Link>
								</div>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</div>
			<Container maxWidth='lg'>
				<Grid item xs={12} style={{ marginBottom: '11rem' }}>
					<Typography
						variant='h5'
						className={classes.secondaryTitle}>
						Information{' '}
					</Typography>
					<Card
						elevation={2}
						style={{
							padding: '2rem',
							width: '90%',
							margin: '0 auto',
						}}>
						<Typography variant='h5'>
							Information about the Ministry of Foreign
							Affairs' advice due to covid-19
						</Typography>
						<br />
						<Typography
							variant='body1'
							style={{
								paddingRight: '1rem',
								marginBottom: '1rem',
							}}>
							The Ministry of Foreign Affairs advises against
							unnecessary travel to all countries . The
							Ministry of Foreign Affairs has, through previous
							decisions, repealed advised against unnecessary
							travel to most countries.
						</Typography>{' '}
						<Link
							href={`/forForeigners/${encodeURIComponent(
								'aboutCovid'
							)}`}>
							<Button
								size='large'
								className={classes.btn}
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
					paddingTop: '1rem ',
					paddingBottom: '7rem',
					backgroundColor: '#edf4ed',
					paddingLeft: '2rem',
					paddingRight: '2rem',
				}}>
				<Container maxWidth='lg'>
					<Grid
						container
						style={{
							textAlign: 'center',
						}}>
						<Grid item xs={12}>
							<Typography
								variant='h5'
								className={classes.secondaryTitle}>
								{' '}
								Embassies and Consulates General
							</Typography>
							<Typography
								variant='body1'
								style={{ paddingRight: ' 2rem' }}>
								Djibouti has through the Ministry of Foreign
								Affairs diplomatic relations with other
								countries and international organizations and
								responsible for internationally development
								cooperation and trade policy. Djibouti's
								foreign representation consists of about 30
								foreign authorities.
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
		</>
	);
}
