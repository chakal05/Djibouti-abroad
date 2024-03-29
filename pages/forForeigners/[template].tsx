import React from 'react';
import Head from 'next/head';
import { Container, Grid, Typography } from '@material-ui/core';
import {
	createStyles,
	Theme,
	makeStyles,
} from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { data } from '../../util/foreignersTemplateInfo';
import PagesInfo from '../../components/templateFooter';
import {
	helpInfoLinks,
	travelInfoLinks,
} from '../../util/forForeignersTemplateLinks';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topColorGreen: {
			backgroundColor: '#edf4ed',
			padding: '3rem',
			borderTopLeftRadius: '1rem',
			borderTopRightRadius: '1rem',
			borderBottomLeftRadius: '1rem',
			borderBottomRightRadius: '1rem',
			// [theme.breakpoints.down(650)]: {
			// 	marginBottom: '-9rem',
			// 	paddingTop: '2rem',
			// },
		},
		titleContainer: {
			padding: '3rem',
			width: '100%',
			textAlign: 'center',
			// paddingTop: '3rem',
			// paddingLeft: '1rem',
			// paddingRight: '1rem',
			// [theme.breakpoints.up(1100)]: {
			// 	//	paddingTop: '5rem',
			// },
			// [theme.breakpoints.up(651)]: {
			// 	width: '50%',
			//     paddingTop: '20%',
			//     paddingLeft:'2rem',
			//     paddingRight:'2rem'
			// },
		},

		imgContainer: {
			// backgroundColor: '#edf4ed',
			marginTop: '1rem',
			padding: '2rem',
			// borderBottomRightRadius: '1rem',
			// borderBottomLeftRadius: '1rem',

			//textAlign: 'center',
			[theme.breakpoints.up(651)]: {
				//	width: '50%',
				// 	position: 'absolute',
				// 	right: '3rem',
				// 	top: '30%',
				// 	marginLeft: '1rem',
			},
			// [theme.breakpoints.up(900)]: {
			// 	top: '20%',
			// },
			// [theme.breakpoints.up(1100)]: {
			// 	width: '500px',
			// 	position: 'relative',
			// 	right: '0',
			// 	left: '0',
			// 	top: '0',
			// },
		},

		// img: {
		// 	[theme.breakpoints.down(650)]: {
		// 		display: 'none !important',
		// 	},

		// 	[theme.breakpoints.up(651)]: {
		// 		position: 'absolute',
		// 		top: '50%',
		// 	},
		// },

		formContainer: {
			display: 'none',
			width: '70%',
			margin: '0 auto',
			// 	padding: '1rem',
			[theme.breakpoints.down(650)]: {
				// 		display: 'flex',
				// 		justifyContent: 'center',
				// 		alignItems: 'center',
				width: '100%',
			},
		},

		textField: {
			margin: '0.5rem 0',
			width: '100%',
			[theme.breakpoints.up(651)]: {
				width: '50%',
			},
		},

		secondTextField: {
			margin: '0.5rem 0',
			width: '100%',
			[theme.breakpoints.up(651)]: {
				width: '50%',
			},
		},

		gridSpace: {
			margin: '1rem 0',
		},

		titleSpace: {
			margin: '1rem 0',
		},

		btn: {
			width: '100%',
			backgroundColor: '#234924',
			color: '#fff',
		},

		show: {
			display: 'none',
		},
	})
);

export default function Info() {
	const classes = useStyles();
	const router = useRouter();
	const query = router.query.template;

	let info;
	data.map((item) => {
		if (item.tag === query) {
			info = item;
		}
	});

	return (
		<>
			<Head>
				{' '}
				<title> {info.pageTitle} - Djibouti Abroad </title>{' '}
			</Head>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item xs={12} className={classes.topColorGreen}>
						{' '}
						<Typography
							variant='h2'
							style={{
								fontWeight: 'bold',
							}}>
							{info.pageTitle}
						</Typography>
					</Grid>

					<Grid item xs={12} className={classes.imgContainer}>
						<Grid container>
							<Grid item xs={12}>
								<Typography
									variant='h5'
									style={{
										marginBottom: '1rem',
										textAlign: 'center',
										fontWeight: 'bold',
									}}>
									{info.secondaryTitle}
								</Typography>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							{info.content.map((item) => {
								return (
									<div key={item.id}>
										<Typography variant='h6'>
											{item.title}
										</Typography>
										<Typography variant='body1'>
											{item.body}
										</Typography>
										<br />
									</div>
								);
							})}
						</Grid>
						<Grid
							item
							xs={12}
							justify='center'
							style={{ marginTop: '7rem' }}>
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
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
