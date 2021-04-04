import React from 'react';
import {
	Container,
	Grid,
	Typography,
	FormControl,
	MenuItem,
	Select,
	InputLabel,
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

const forDjiboutian = () => {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<>
			<Container>
				<Grid container>
					<Grid item xs={6}>
						<Typography
							variant='h2'
							style={{ marginTop: '7rem' }}>
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
						<FormControl
							variant='outlined'
							style={{
								width: '400px',
								marginTop: '2rem',
							}}>
							<InputLabel id='demo-simple-select-label'>
								Choose a country
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={age}
								onChange={handleChange}>
								<MenuItem value={10}>Andalouse</MenuItem>
								<MenuItem value={20}>Algerie</MenuItem>
								<MenuItem value={30}>Albanie</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={6} align='center'>
						<Image
							src='/Online_information.png'
							alt='Djibouti abrad information'
							width='500'
							height='500'
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
				<Container xs='lg'>
					<Typography
						variant='h5'
						style={{ marginBottom: '2rem' }}>
						Frequently asked questions
					</Typography>
					<Accordion>
						<AccordionSummary
							expandIcon={<faChevronDown />}
							aria-controls='panel1a-content'
							id='panel1a-header'>
							<Typography>Accordion 1</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse malesuada lacus
								ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<faChevronDown />}
							aria-controls='panel2a-content'
							id='panel2a-header'>
							<Typography>Accordion 2</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse malesuada lacus
								ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Container>
			</div>
			<Container
				xs='lg'
				style={{ marginTop: '5rem', marginBottom: '3rem' }}>
				<Typography variant='h5' style={{ marginBottom: '2rem' }}>
					Information for Djibouti nationals
				</Typography>
				<Grid container justify='center'>
					<Grid xs={5}>
						<Card
							style={{
								padding: '1rem',
								height: '300px',
							}}>
							<Typography variant='h6' component='h1'>
								{' '}
								Reseinformation
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
										Visiting Sweden
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
										Moving to someone in Sweden
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
										Working in Sweden
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
										Studying in Sweden
									</Typography>
								</li>
							</ul>
						
						</Card>
                    </Grid>
                    <Grid xs={1}></Grid>
                    <Grid xs={5}>
                    <Card
                    style={{
                        padding: '1rem',
                        height: '300px',
                    }}>
                    <Typography variant='h6' component='h1'>
                        {' '}
                       Aide aux djiboutiens a l etranger
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
                                Visiting Sweden
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
                                Moving to someone in Sweden
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
                                Working in Sweden
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
                                Studying in Sweden
                            </Typography>
                        </li>
                    </ul>
                   
                </Card>
                    </Grid>
				</Grid>
			</Container>
		</>
	);
};

export default forDjiboutian;
