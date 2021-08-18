import React from 'react';
import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhoneSquare,
	faEnvelope,
	faMapMarker,
	faFax,
    faCopyright
} from '@fortawesome/free-solid-svg-icons';
import { Grid, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		footer: {
			backgroundColor: theme.palette.background.paper,
			// marginTop: theme.spacing(8),
			padding: theme.spacing(6, 0),
		//	marginTop: '7rem',
		},

		icon: {
			height: '20px',
			width: '20px',
			marginRight: '1rem',
			position: 'relative',
			top: '.3rem',
		},

		typo: {
			margin: '.2rem 0',
		},

		contact: {
			marginBottom: '1rem',
			borderBottom: `1px solid ${theme.palette.divider}`,
			fontWeight: 'bold',
		},
	})
);

export default function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Container maxWidth='lg'>
				<Typography variant='h4' className={classes.contact}>
					{' '}
					Contact{' '}
				</Typography>

				<Typography variant='body1' className={classes.typo}>
					{' '}
					<FontAwesomeIcon
						className={classes.icon}
						icon={faMapMarker}
					/>
					Adress: B.P 1863, RUE MARCHAND, Djibouti
				</Typography>

				<Typography variant='body1' className={classes.typo}>
					{' '}
					<FontAwesomeIcon
						className={classes.icon}
						icon={faPhoneSquare}
					/>
					Tel: +253 21 35 24 71
				</Typography>
				<Typography variant='body1' className={classes.typo}>
					{' '}
					<FontAwesomeIcon
						className={classes.icon}
						icon={faFax}
					/>
					Fax: +253 21 35 38 40
				</Typography>

				<Typography variant='body1' className={classes.typo}>
					{' '}
					<FontAwesomeIcon
						className={classes.icon}
						icon={faEnvelope}
					/>
					Email: contact@diplomatie.gouv.dj{' '}
				</Typography>
				<Typography
					variant='body1'
					style={{ marginTop: '.5rem' }}>
					<Link
						color='inherit'
						href='https://diplomatie.gouv.dj/'>
					<FontAwesomeIcon
						className={classes.icon}
						icon={faCopyright}
					/>
						Ministère des Affaires Etrangères et de la
						coopération internationale
					
							{` ${new Date().getFullYear()}.`}
							
					</Link>{' '}
				</Typography>
			</Container>
		</footer>
	);
}
