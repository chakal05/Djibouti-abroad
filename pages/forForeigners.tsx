//import styles from '../styles/index.module.scss';
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
} from '@fortawesome/free-solid-svg-icons';
import Countries from '../components/countries'
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
				width: '250px',
				position: 'absolute',
				left: '50%',
				right: 0,
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
	})
);

export default function forForeigners() {
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

						<Countries/>
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
							<Accordion>
								<AccordionSummary
									expandIcon={''}
									aria-controls='panel1a-content'
									id='panel1a-header'>
									<Typography>Accordion 1</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Suspendisse malesuada
										lacus ex, sit amet blandit leo lobortis
										eget.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={''}
									aria-controls='panel2a-content'
									id='panel2a-header'>
									<Typography>Accordion 2</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Suspendisse malesuada
										lacus ex, sit amet blandit leo lobortis
										eget.
									</Typography>
								</AccordionDetails>
							</Accordion>
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
									Travel information
								</Typography>

								<ul style={{ listStyle: 'none' }}>
									<li>
										<Typography>
											{' '}
											<FontAwesomeIcon
												style={{
													marginRight: '1rem',
													height: '15px',
													width: '15px',
												}}
												icon={faArrowAltCircleRight}
											/>
											Coronavirus 
										</Typography>
									</li>
									<li>
										<Typography>
											{' '}
											<FontAwesomeIcon
												style={{
													marginRight: '1rem',
													height: '15px',
													width: '15px',
												}}
												icon={faArrowAltCircleRight}
											/>
											Travel documents
										</Typography>
									</li>
									<li>
										<Typography>
											<FontAwesomeIcon
												style={{
													marginRight: '1rem',
													height: '15px',
													width: '15px',
												}}
												icon={faArrowAltCircleRight}
											/>
											Prepare your trip
										</Typography>
									</li>
									<li>
										<Typography>
											{' '}
											<FontAwesomeIcon
												style={{
													marginRight: '1rem',
													height: '15px',
													width: '15px',
												}}
												icon={faArrowAltCircleRight}
											/>
                                            Terrorism and Tourism
										</Typography>
									</li>
                                    <li>
										<Typography>
											{' '}
											<FontAwesomeIcon
												style={{
													marginRight: '1rem',
													height: '15px',
													width: '15px',
												}}
												icon={faArrowAltCircleRight}
											/>
                                           If something happens
										</Typography>
									</li>
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
									<li>
										<Typography>
											{' '}
											<FontAwesomeIcon
												style={{
													marginRight: '1rem',
													height: '15px',
													width: '15px',
												}}
												icon={faArrowAltCircleRight}
											/>
											Consular registration
										</Typography>
									</li>
									<li>
										<Typography>
											{' '}
											<FontAwesomeIcon
												style={{
													marginRight: '1rem',
													height: '15px',
													width: '15px',
												}}
												icon={faArrowAltCircleRight}
											/>
											Passports
										</Typography>
									</li>
									<li>
										<Typography>
											<FontAwesomeIcon
												style={{
													marginRight: '1rem',
													height: '15px',
													width: '15px',
												}}
												icon={faArrowAltCircleRight}
											/>
											Civil status documents
										</Typography>
									</li>
									<li>
										<Typography>
											{' '}
											<FontAwesomeIcon
												style={{
													marginRight: '1rem',
													height: '15px',
													width: '15px',
												}}
												icon={faArrowAltCircleRight}
											/>
											Legislations
										</Typography>
									</li>
                                    <li>
										<Typography>
											{' '}
											<FontAwesomeIcon
												style={{
													marginRight: '1rem',
													height: '15px',
													width: '15px',
												}}
												icon={faArrowAltCircleRight}
											/>
											Students
										</Typography>
									</li>
								</ul>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</main>
		</>
	);
}
