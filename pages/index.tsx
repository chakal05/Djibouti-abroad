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
			padding: '3rem 2rem',
			height: '300px',
			width: '350px',
		},

		listHeader: {
			marginBottom: '1rem',
		},

        listContainer:{
            paddingLeft:'1rem'
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
            margin:'.3rem 0',
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
							<Card elevation={3} className={classes.carte}>
								<div className={classes.listHeader}>
									<Typography variant='h5' component='h1'>
										{' '}
										Travel or live abroad{' '}
									</Typography>
									<Typography variant='h6'>
										Here you will find:
									</Typography>
								</div>
								{travelInfoLinks.map((item) => {
									return (
										<div
											className={classes.listContainer}
											key={item.id}>
											<Typography  className={classes.url}>
												<Link href={item.url}>
													<a target={item.target}>
														<FontAwesomeIcon
															style={{
																marginRight: '1rem',
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
										</div>
									);
								})}
							</Card>
						</Grid>
						<Grid item className={classes.carteContainer}>
							<Card elevation={3} className={classes.carte}>
								<div className={classes.listHeader}>
									{' '}
									<Typography variant='h5'>
										{' '}
										Going to Djibouti?
									</Typography>
									<Typography variant='h6'>
										Visas and immigration
									</Typography>
								</div>
								{forForeignersLinks.map((item) => {
									return (
										<div
											className={classes.listContainer}
											key={item.id}>
											<Typography className={classes.url}>
												<Link href={item.url}>
													<a target={item.target}>
														<FontAwesomeIcon
															style={{
																marginRight: '1rem',
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
										</div>
									);
								})}
							</Card>
						</Grid>
					</Grid>
				</Container>
			</div>
			<Container maxWidth='lg'>
				<Grid item xs={12} style={{ marginBottom: '11rem' }}>
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
					<Card
						elevation={2}
						style={{
							padding: '3rem',
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
							style={{ paddingRight: '1rem' }}>
							The Ministry of Foreign Affairs advises against
							unnecessary travel to all countries . The
							Ministry of Foreign Affairs has, through previous
							decisions, repealed advised against unnecessary
							travel to most countries.
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
					paddingTop: '6rem ',
					paddingBottom: '7rem',
					backgroundColor: '#edf4ed',
					textAlign: 'center',
					paddingLeft: '2rem',
					paddingRight: '2rem',
				}}>
				<Container maxWidth='lg'>
					<Grid
						container
						style={{
							padding: '1rem',
						}}>
						<Grid item xs={12}>
							<Typography
								variant='h5'
								style={{
									marginBottom: '2rem',
								}}>
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
