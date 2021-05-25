import { Container, Grid, Typography, Card } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles, createStyles, Theme } from '@material-ui/core/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faArrowAltCircleRight,
	faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		carteContainer: {
			padding: '1rem',
            width:'50%',
            [theme.breakpoints.down(650)]: {
				width: '100%',
				marginBottom: '1rem',
			},
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

export default function InfoBelow({ leftLinks, rightLinks }) {
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
						Information for Djibouti nationals
					</Typography>
				</Grid>
                <Grid item xs={12}>
                <Grid container justify='center'>
					<Grid item className={classes.carteContainer}>
						<Card elevation={3} className={classes.carte}>
							<Typography
								variant='h5'
								className={classes.carteTitle}>
								{' '}
								Travel information
							</Typography>
							<Typography
								variant='body1'
								className={classes.carteSecTitle}>
								Here is important information before and
								during your stay abroad.
							</Typography>
							{leftLinks.map((item) => {
								return (
									<div key={item.id}>
										<Link
											href={{
												pathname: item.lien.pathname,
												query: {
													template:
														item.lien.query.template,
												},
											}}>
											<a>
												<Typography
													variant='body1'
													className={classes.url}>
													<Grid container>
														<Grid item xs={9}>
															{item.title}
														</Grid>
														<Grid
															item
															xs={3}
															style={{
																textAlign: 'right',
															}}>
															<FontAwesomeIcon
																style={{
																	height: '15px',
																	width: '15px',
																}}
																icon={
																	faArrowAltCircleRight
																}
															/>
														</Grid>
													</Grid>
												</Typography>
											</a>
										</Link>
									</div>
								);
							})}
						</Card>
					</Grid>
					<Grid item className={classes.carteContainer}>
						<Card elevation={3} className={classes.carte}>
							<Typography
								variant='h5'
								className={classes.carteTitle}>
								{' '}
								Help for Djiboutian abroad
							</Typography>
							<Typography
								variant='body1'
								className={classes.carteSecTitle}>
								Here is information about the service you can get abroad.
							</Typography>
							{rightLinks.map((item) => {
								return (
									<div key={item.id}>
										<Link
											href={{
												pathname: item.lien.pathname,
												query: {
													template:
														item.lien.query.template,
												},
											}}>
											<a>
												<Typography
													variant='body1'
													className={classes.url}>
													<Grid container>
														<Grid item xs={9}>
															{item.title}
														</Grid>
														<Grid
															item
															xs={3}
															style={{
																textAlign: 'right',
															}}>
															<FontAwesomeIcon
																style={{
																	marginRight: '0',
																	height: '15px',
																	width: '15px',
																}}
																icon={
																	faArrowAltCircleRight
																}
															/>
														</Grid>
													</Grid>
												</Typography>
											</a>
										</Link>
									</div>
								);
							})}
						</Card>
					</Grid>
				</Grid>
                </Grid>
				
			</Grid>
		</Container>
	);
}
