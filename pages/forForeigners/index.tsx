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
} from '@material-ui/core';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Countries from '../../components/countries';
import PagesInfo from '../../components/templateFooter';
import {
	helpInfoLinks,
	travelInfoLinks,
} from '../../util/forForeignersTemplateLinks';

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

			[theme.breakpoints.up(1100)]: {
				paddingTop: '4rem',
			},

			[theme.breakpoints.up(651)]: {
				width: '50%',
				//paddingTop: '2rem',
			},
		},

		imgContainer: {
			width: '50%',
			[theme.breakpoints.up(650)]: {
				width: '250px',
				position: 'absolute',
				right: '3rem',
				top: '17%',
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
				border: 'none',
			},
		},

		img: {
			[theme.breakpoints.down(650)]: {
				display: 'none !important',
			},

			[theme.breakpoints.up(650)]: {
				position: 'absolute',
				top: '50%',
			},
		},

		carteContainer: {
			padding: '1rem',
		},

		carte: {
			padding: '1rem',
			height: '250px',
			width: '80%',
			margin: '0 auto',
			[theme.breakpoints.down(650)]: {
				width: '100%',
				marginBottom: '1rem',
			},
		},
		url: {
			' &:hover': {
				fontWeight: 'bold',
			},
		},
		carteTitle: {
			marginBottom: '.3rem',
			fontWeight: 'bold',
		},

		carteSecTitle: {
			marginBottom: '1rem',
			fontWeight: 'bold',
		},
	})
);

const questions = [
	{
		id: 1,
		title: 'Do i need visa to visit Djibouti ?',
		description: `
        Access to Djibouti territory is subject to obtaining a visa.
                It must be obtained before departure.
                You can apply through Djiboutian diplomatic representations based abroad
               or  using an e-visa procedure: https://www.evisa.gouv.dj/.
`,
	},
	{
		id: 2,
		title: 'Are you a journalist ?',
		description: `	
        Journalists wishing to travel to Djibouti for professional reasons must have,
        before arriving in the country, the accreditation required by the Djiboutian 
        authorities (contact the Djibouti embassy in your country before departure).
        For any further information, contact the Djibouti embassy in your country or the nearest.
`,
	},
	{ 
		id: 3,
		title: 'What are the customs and traditions of Djibouti ?',
		description: `	
        It should be observed, as in any Muslim country, a certain correction 
        in dress and behavior, especially in public places, and a fortiori near
        religious sites: no necklines, high-cut tank tops, shorts too short or
        mini-skirts for women (plan to be able to cover up), no swim shorts or
        sloppy clothing for men.
        In general, it is strongly recommended to adopt an attitude of        
        discretion in public spaces. Demonstrative acts (sign of affection, physical
        contact in particular) should be avoided.
        Public display, manufacture, transfer or sale of objects, images,     
        films, sound or visual recordings of an erotic or pornographic nature is
        punishable by imprisonment. Rape, sexual assault and pimping are very severely 
        punished.
`,
	},
];

export default function forDjiboutian() {
	const classes = useStyles();

	return (
		<>
			<Container maxWidth='lg'>
				<Grid container className={classes.topColorWhite}>
					<Grid item className={classes.titleContainer}>
						<Typography
							variant='h2'
							style={{ fontWeight: 'bold' }}>
							{' '}
							{'Djibouti Abroad '}
						</Typography>
						<Typography
							variant='h5'
							style={{ marginTop: '2rem' }}
							component='h5'>
							Welcome to Djibouti Abroad. It's the official
							website of the Djiboutian embassies and
							consulates and includes all the websites of
							Djibouti's diplomacy abroad.
						</Typography>

						<Countries />
					</Grid>
					<Grid item className={classes.imgContainer}>
						<Image
							src={'/traveller.png'}
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
					paddingBottom: '3rem',
				}}>
				<Container maxWidth='lg'>
					<Typography
						variant='h4'
						style={{
							marginBottom: '5rem',
							fontWeight: 'bold',
						}}>
						Frequently asked questions
					</Typography>
					<div style={{ width: '80%', margin: '0 auto' }}>
						{questions.map((item) => {
							return (
								<Accordion key={item.id}>
									<AccordionSummary
										style={{
											backgroundColor: '#edf4ed',
										}}
										expandIcon={
											<>
												<Typography>
													{
														<div
															style={{
																visibility: 'hidden',
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
			<div
				style={{
					marginTop: '5rem',
					paddingTop: '2rem ',
					paddingBottom: '7rem',
					backgroundColor: '#edf4ed',
				}}>
				<Container
					maxWidth='lg'
					style={{ marginTop: '5rem', marginBottom: '3rem' }}>
					<PagesInfo
						leftLinks={travelInfoLinks}
						rightLinks={helpInfoLinks}
                        pageTitle={'Foreigners'}
						leftFirstTitle={'Going to Djibouti ?'}
						leftSecTitle={`Here is some information about Djibouti and its opportunities.`}
						rightFirstTitle={`Help for foreigners `}
						rightSecTitle={`Here is information about the service you
                        can get in Djibouti.`}
					/>
				</Container>
			</div>
		</>
	);
}
