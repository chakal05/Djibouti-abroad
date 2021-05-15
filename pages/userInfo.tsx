import {
	Container,
	Grid,
	Typography,
	Paper,
} from '@material-ui/core';
import {
	createStyles,
	Theme,
	makeStyles,
} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		greenBackground: {
			backgroundColor: '#edf4ed',
			padding: '3rem',
			borderTopLeftRadius: '1rem',
			borderTopRightRadius: '1rem',
			borderBottomLeftRadius: '1rem',
			borderBottomRightRadius: '1rem',
		},

		carteContainer: {
			width: '100%',
			margin: '1rem 0',

			[theme.breakpoints.up(670)]: {
				width: '50%',
			},
			[theme.breakpoints.up(1200)]: {
				width: '30%',
			},
		},

		carte: {
			padding: '1rem',
			height: '150px',
			width: '70%',
			margin: '0 auto',

			[theme.breakpoints.up(670)]: {
				width: '300px',
			},
			[theme.breakpoints.up(1200)]: {
				//	width: '30%',
			},
		},

		cardTitle: {
			fontWeight: 'bold',
		},
	})
);

export default function userInfo() {
	const classes = useStyles();
	return (
		<>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item xs={12} >
						{' '}
						<Typography variant='h2' style={{
                            fontWeight: 'bold',
                        }}>
							{' '}
							Welcome to your page
						</Typography>
					</Grid>
					<Grid item xs={12} >
						

						<Paper
                            elevation={5}
                            className={classes.greenBackground}
							style={{
								padding: '1rem',
								width: '80%',
								margin: '0 auto',
							}}></Paper>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
