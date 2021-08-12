import Head from 'next/head';
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
} from '../../util/forCitizensTemplateLinks';

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
	})
);

const questions = [
	{
		id: 1,
		title: '	Did you loose your passport ?',
		description: `If you have to travel immediately, it is possible 
        to apply for a  passport at a Djiboutian embassy and certain 
        consulates during regular opening hours.
        Select the nearest Djiboutian embassy for contact information
        , opening hours above. Your passport and national ID card are a valuable
        document, if it has been stolen, you must make a police report in the country
        you are in. Bring a copy of the report to the embassy or consulate.
        It is important that you contact the country's responsible authority or embassy for more information.`,
	},
	{
		id: 2,
		title: '	Did your passport expire ?',
		description: `A Djiboutian citizen living abroad can apply for a new passport 
        or ID card in various ways:
        At the Djiboutian foreign service
        Applications for a new passport can be made at most Djiboutian foreign authorities.
      `,
	},
	{
		id: 3,
		title: '	Do you have questions about visa?',
		description: `Djiboutian embassies and the Ministry for Foreign Affairs are not responsible for other countries
        entry regulations or any visa requirements. Keep in mind that entry and exit rules can be changed
        with short notice.
       Check the current entry regulations with the authorities of the country you are traveling to or
        the country's nearest embassy.`,
	},
	{
		id: 4,
		title: 'Which countries to avoid due to Coronavirus ?',
		description: `Information on which countries and areas the Ministry of Foreign Affairs advises against can be found here on the website.
        For information on current events and the embassies' general travel information, see here: The embassy's travel information
        When the Ministry of Foreign Affairs advises against travel, it should be seen as a signal for a serious security situation 
        and that one should carefully consider one's decision to travel. The reasons for a dissuasion may be, for example, political 
        unrest, violence, specific threats or the risk of a serious spread of infection. The Ministry of Foreign Affairs can also 
        advise against travel due to the consequences of a natural disaster. A dissuasion can also mean that there are very limited 
        opportunities for the Ministry of Foreign Affairs / Embassy to help Djiboutian travelers on the ground, for example if there is 
        a war or a war-like situation. `,
	},
	{
		id: 5,
		title: '	Will you travel with a child ?',
		description: `In cases where you are traveling with a minor child, a certificate may be required of the other parent's / guardian's 
        consent to the trip. If another relative / person travels with the child, a certificate may be required of both parents '/ guardians' 
        consent to this.
        Check the current requirements with the authorities of the country you are traveling to or the country's nearest embassy.`,
	},
	{
		id: 6,
		title: 'When does the embassy open and close ?',
		description: `Information about the embassies' opening hours and telephone hours can be found on each embassy's page above.`,
	},
];

export default function forDjiboutian() {
	const classes = useStyles();

	return (
		<>
			<Head>
				<title> For Djiboutians  - Djibouti aAbroad</title>
			</Head>
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
				<div
					style={{
						margin: '5rem 0',
						paddingTop: '2rem ',
						paddingBottom: '7rem',
						backgroundColor: '#edf4ed',
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
				<Grid item xs={12}>
					<PagesInfo
						leftLinks={travelInfoLinks}
						rightLinks={helpInfoLinks}
						pageTitle={'Citizens'}
						leftFirstTitle={'Travel Information'}
						leftSecTitle={`Here is important information before and
                during your stay abroad.`}
						rightFirstTitle={`Help for Djiboutian abroad`}
						rightSecTitle={`Here is information about the service you
                can get abroad.`}
					/>
				</Grid>
			</Container>
		</>
	);
}
