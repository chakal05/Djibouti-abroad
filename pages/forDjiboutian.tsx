import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';
import React from 'react';
import {
	Container,
	Grid,
	Typography,
	Accordion, 
	AccordionSummary,
	AccordionDetails,
	Card,
	Button,
} from '@material-ui/core';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faArrowAltCircleRight,
	faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import Countries from '../components/countries';
import Link from 'next/link';

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

			[theme.breakpoints.up(1100)]: {
				paddingTop: '5rem',
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
				right: '3rem',
				top: '30%',
				marginLeft: '1rem',
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
			[theme.breakpoints.down(650)]: {
				display: 'none !important',
			},

			[theme.breakpoints.up(651)]: {
				position: 'absolute',
				top: '50%',
			},
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
			padding: '1rem',
			height: '200px',
			width: '400px',
			margin: '1rem',
		},
		url: {
			' &:hover': {
				fontWeight: 'bold',
			},
		},
	})
);

const questions = [
	{
		id: 1,
		title: '	Did you loose your passport ?',
		description: `	Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Suspendisse malesuada
lacus ex, sit amet blandit leo lobortis
eget.`,
	},
	{
		id: 2,
		title: '	Did your passport expire ?',
		description: `	Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Suspendisse malesuada
lacus ex, sit amet blandit leo lobortis
eget.`,
	},
	{
		id: 3,
		title: '	Do you have questions about visa?',
		description: `	Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Suspendisse malesuada
lacus ex, sit amet blandit leo lobortis
eget.`,
	},
	{
		id: 4,
		title: 'Which countries to avoid due to Coronavirus ?',
		description: `	Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Suspendisse malesuada
lacus ex, sit amet blandit leo lobortis
eget.`,
	},
	{
		id: 5,
		title: '	Will you travel with a child ?',
		description: `	Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Suspendisse malesuada
lacus ex, sit amet blandit leo lobortis
eget.`,
	},
	{
		id: 6,
		title: 'When does the embassy open and close ?',
		description: `	Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Suspendisse malesuada
lacus ex, sit amet blandit leo lobortis
eget.`,
	},
];

const travelInfoLinks = [
	{ id: '1', title: 'About the Coronavirus', url: '/foreignPol' },
	{ id: '2', title: 'Travel documents', url: '/foreignPol' },
	{ id: '3', title: 'Prepare your trip', url: '/foreignPol' },
	{ id: '4', title: 'Terrorism and tourism', url: '/foreignPol' },
	{ id: '5', title: 'If something happens', url: '/foreignPol' },
];
const helpInfoLinks = [
	{ id:'1',title: 'Consular registration', url: '#' },
	{ id:'2',title: 'Passports', url: '#' },
	{ id:'3',title: 'Civil status documents', url: '#' },
	{ id:'4',title: 'Legislations', url: '#' },
	{ id:'5',title: 'Students', url: '#' },
];

export default function forDjiboutian() {
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
							<Typography variant='h2'>
								{' '}
								{'Djibouti Abroad '}
							</Typography>
							<Typography
								variant='h5'
								style={{ marginTop: '2rem' }}
								component='h5'>
								Djibout abroad offers service and help to
								Djibouti nationals who are traveling or are
								already abroad.
							</Typography>

							<Countries />
						</Grid>
						<Grid item className={classes.imgContainer}>
							<Image
								src={'/Online_information.png'}
								alt='Djibouti abrad information'
								layout='responsive'
								width={500}
								height={500}
								className={classes.img}
							/>
						</Grid>
	 				</Grid>
				</Container>
				<div
					style={{
						marginTop: '5rem',
						paddingTop: '2rem ',
						paddingBottom: '7rem',
						backgroundColor: '#edf4ed',
					}}>
					<Container maxWidth='lg'>
						<Typography
							variant='h5'
							style={{ marginBottom: '2rem' }}>
							Frequently asked questions
						</Typography>
						<div style={{ width: '80%', margin: '0 auto' }}>
							{questions.map((item) => {
								return (
									<Accordion key={item.id}>
										<AccordionSummary
											expandIcon={
												<>
													<Typography>
														{
															<div
																style={{
																	visibility:
																		'hidden',
																	marginTop: '-1rem',
																}}>
																{' '}
																ds{' '}
															</div>
														}
														<FontAwesomeIcon
															style={{
																color: '#000',
															}}
															icon={faArrowCircleDown}
														/>{' '}
													</Typography>
												</>
											}
											aria-controls='panel1a-content'
											id='panel1a-header'>
											<Typography
												style={{ fontWeight: 'bold' }}
												variant='subtitle2'>
												{' '}
												{item.title}
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography>
												{item.description}
											</Typography>
										</AccordionDetails>
									</Accordion>
								);
							})}
						</div>
					</Container>
				</div>
				<Container
					maxWidth='lg'
					style={{ marginTop: '5rem', marginBottom: '3rem' }}>
					<Grid
						container
						justify='center'
						className={classes.carteContainer}>
						<Grid item xs={12}>
							<Typography
								variant='h5'
								style={{ marginBottom: '2rem' }}>
								Information for Djibouti nationals
							</Typography>
						</Grid>
						<Grid item>
							<Card className={classes.carte}>
								<Typography
									variant='h6'
									style={{ marginBottom: '1rem' }}>
									{' '}
									Travel information
								</Typography>
								<ul style={{ listStyle: 'none' }}>
									{travelInfoLinks.map((item) => {
										return (
											<li key={item.id}>
												<Typography className={classes.url}>
													<Link  href={item.url}>
														<a >
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
						<Grid item>
							<Card
								className={classes.carte}
								style={
									{
										// padding: '1rem',
										// height: '300px',
									}
								}>
								<Typography variant='h6' component='h1'>
									{' '}
									Help for djiboutians abroad
								</Typography>
								<ul style={{ listStyle: 'none' }}>
									{helpInfoLinks.map((item) => {
										return (
											<li key={item.id}>
												<Typography>
													<Link href={item.url}>
														<a>
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
			</main>
		</>
	);
}
