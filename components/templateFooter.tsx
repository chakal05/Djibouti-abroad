import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/';
import Card from './Card';
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		carteContainer: {
			padding: '3rem',

			[theme.breakpoints.down(650)]: {
				width: '100%',
				marginBottom: '1rem',
				padding: '1rem',
			},
		},

		carte: {
			padding: '1rem',
			width: '80%',
			margin: '0 auto',
			[theme.breakpoints.down(650)]: {
				width: '100%',
				marginBottom: '1rem',
			},
		},

		url: {
			'&:hover': {
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

export default function InfoBelow({
	pageTitle,
	leftLinks,
	rightLinks,
	leftFirstTitle,
	leftSecTitle,
	rightFirstTitle,
	rightSecTitle,
}) {
	const classes = useStyles();
	return (
		<Container
			maxWidth='lg'
			style={{ marginTop: '1rem', marginBottom: '3rem' }}>
			<Grid container>
				<Grid item xs={12}>
					<Typography
						variant='h4'
						style={{
							textAlign: 'center',
							marginBottom: '2rem',
							fontWeight: 'bold',
						}}>
						Information for {pageTitle}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container justify='center'>
						<Grid item className={classes.carteContainer}>
							<Card
								cardTitle={leftFirstTitle}
								cardText={leftSecTitle}
								listItems={leftLinks}
								btn={false}
								btnLink={``}
							/>
						</Grid>
						<Grid item className={classes.carteContainer}>
							<Card
								cardTitle={rightFirstTitle}
								cardText={rightSecTitle}
								listItems={rightLinks}
								btn={false}
								btnLink={``}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
