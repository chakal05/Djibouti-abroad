import React from 'react';
import {
	Button,
	Card,
	Grid,
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Container,
} from '@material-ui/core';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowAltCircleRight,
	faInfo,
	faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
export default function Home() {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<>
			<Head>
				<title>Djibouti Abroad</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main style={{ fontFamily: 'Roboto' }}>
				<Container>
					<Grid container>
						<Grid style={{ marginTop: '7rem' }} item xs={6}>
							<Typography variant='h2'>
								{' '}
								{'Djibouti Abroad '}
							</Typography>
							<Typography
								variant='h5'
								style={{ marginTop: '2rem' }}
								component='h5'>
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
                                <Link href="/forDjiboutian">  
                                <Button
									variant='contained'
									style={{
										marginLeft: '1rem',
										backgroundColor: '#234924',
										color: '#fff',
									}}>
									{' '}
									Pour les djiboutien{' '}
								</Button>
                                </Link>
                                <Link href='/forForeigners' >
                                <Button
									variant='contained'
									style={{
										marginLeft: '1rem',
										backgroundColor: '#fff',
										color: '#234924',
									}}>
									{' '}
									For foreigners{' '}
								</Button>
                                </Link>
							</Typography>
						</Grid>
						<Grid xs={6} align='center'>
							<Image
								src={
									'/djibouti-watercolor-map-michael-tompsett.jpg'
								}
								layout='fixed'
								width={600}
								height={600}
								alt='djib logo'
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
						<Grid container>
							<Grid item xs={12}>
								<Typography
									variant='h4'
									component='h5'
									style={{ margin: '2rem 0' }}>
									{' '}
									<FontAwesomeIcon
										style={{
											height: '40px',
											width: '40px',
											marginRight: '1rem',
											position: 'relative',
											top: '.5rem',
										}}
										icon={faQuestionCircle}
									/>
									Some of our services{' '}
								</Typography>
							</Grid>
							<Grid style={{ padding: '1rem' }} xs={6}>
								<Card
									style={{
										padding: '1rem',
										height: '300px',
									}}>
									<Typography variant='h6' component='h1'>
										{' '}
										RESA ELLER BO UTOMLANDS{' '}
									</Typography>
									<Typography variant='h6' component='h1'>
										Här hittar du:
									</Typography>
									<ul style={{ listStyle: 'none' }}>
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
												Ambassadernas reseinformation
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
												Hjälp till svenskar utomlands
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
												Svensklistan{' '}
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
												Om covid-19
											</Typography>
										</li>
									</ul>
									<div
										style={{
											textAlign: 'center',
											paddingTop: '1rem',
										}}>
										<Button
											style={{
												backgroundColor: '#234924',
												color: '#fff',
											}}
											variant='contained'>
											{' '}
											Read more
										</Button>
									</div>
								</Card>
							</Grid>
							<Grid style={{ padding: '1rem' }} xs={6}>
								<Card
									style={{
										padding: '1rem',
										height: '300px',
									}}>
									<Typography variant='h6' component='h1'>
										{' '}
										GOING TO SWEDEN?
									</Typography>
									<Typography variant='h6' component='h1'>
										Visas and immigration
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
									<div
										style={{
											textAlign: 'center',
											paddingTop: '1rem',
										}}>
										<Button
											style={{
												backgroundColor: '#234924',
												color: '#fff',
											}}
											variant='contained'>
											{' '}
											Read more{' '}
										</Button>
									</div>
								</Card>
							</Grid>
						</Grid>
					</Container>
				</div>
				<Container xs='lg'>
					<Grid item={12} style={{ marginBottom: '13rem' }}>
						<Typography
							variant='h4'
							style={{
								marginTop: '5rem ',
								marginBottom: '3rem',
							}}
							component='h5'>
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
								Information om UD:s avrådan med anledning av
								covid-19
							</Typography>
							<br />
							<Typography variant='h6'>
								UD avråder från icke nödvändiga resor till
								alla länder utanför EU, EES samt
								Schengenområdet till och med den 15 april
								2021. UD har genom tidigare beslut hävt
								avrådan från icke nödvändiga resor till
								flertalet europeiska länder. Klicka på länken
								nedan för att läsa mer.
							</Typography>
							<Button
								size='large'
								style={{
									backgroundColor: '#234924',
									color: '#fff',
									marginTop: '1rem',
								}}
								variant='contained'>
								{' '}
								Read more{' '}
							</Button>
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
					<Container xs='lg'>
						<Grid
							container
							style={{
								padding: '1rem',
								marginTop: '2rem',
							}}>
							<Grid xs={6} item>
								<Typography
									variant='h4'
									style={{
										marginTop: '2rem',
										marginBottom: '2rem',
									}}
									component='h5'>
									{' '}
									Ambassader och generalkonsulat
								</Typography>
								<Typography
									variant='h6'
									style={{ paddingRight: ' 2rem' }}>
									Sverige har genom Utrikesdepartementet
									diplomatiska förbindelser med andra länder
									och internationella organisationer och
									ansvarar för internationellt
									utvecklingssamarbete och handelspolitik.
									Sveriges utrikesrepresentation består av
									cirka 100 utlandsmyndigheter.
								</Typography>
							</Grid>
							<Grid xs={6} item>
								<Typography
									variant='h4'
									style={{ marginTop: '2rem' }}
									component='h6'>
									Hitta ambassader, generalkonsulat och
									representationer:{' '}
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
										<MenuItem value={10}>
											Andalouse
										</MenuItem>
										<MenuItem value={20}>Algerie</MenuItem>
										<MenuItem value={30}>Albanie</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</Container>
				</div>
			</main>
		</>
	);
}
