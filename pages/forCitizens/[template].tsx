import React from 'react';
import { Container, Grid, Typography, Card } from '@material-ui/core';
import {
	createStyles,
	Theme,
	makeStyles,
} from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { data } from '../../util/citizensTemplateInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faArrowAltCircleRight,
	faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import PagesInfo from '../../components/templateFooter';
import {
	helpInfoLinks,
	travelInfoLinks,
} from '../../util/forCitizensTemplateLinks';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topColorGreen: {
			backgroundColor: '#edf4ed',
			padding: '3rem',
			borderTopLeftRadius: '1rem',
			borderTopRightRadius: '1rem',
			borderBottomLeftRadius: '1rem',
			borderBottomRightRadius: '1rem',
		},
		titleContainer: {
			padding: '3rem',
			width: '100%',
			textAlign: 'center',
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
		},

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
		carteContainer: {
			padding: '1rem',
		},
		carte: {
			padding: '1rem',
			//	height: '250px',
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
								variant='h4'
								style={{
									marginBottom: '2rem',
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
									<Typography
										variant='h6'
										style={{ fontWeight: 'bold' }}>
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
				</Grid>
				<Grid item>
					<PagesInfo
						leftLinks={travelInfoLinks}
						rightLinks={helpInfoLinks}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}
