import React from 'react';
import { Typography, Grid, Button, Card } from '@material-ui/core';
import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';
import Link from 'next/link';
import {
	faCheckCircle,
	faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

			[theme.breakpoints.up(651)]: {
				width: '50%',
			},
		},

		imgContainer: {
			width: '50%',
			[theme.breakpoints.up(651)]: {
				width: '300px',
				position: 'absolute',
				right: '3rem',
				top: '25%',
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
			},
		},

		img: {
			[theme.breakpoints.down(651)]: {
				display: 'none !important',
			},

			[theme.breakpoints.up(651)]: {
				position: 'absolute',
				top: '50%',
			},
		},

		secondGreen: {
			marginTop: '5rem',
			paddingTop: '2rem ',
			paddingBottom: '7rem',
			backgroundColor: '#edf4ed',
		},

		carteContainer: {
			padding: '1rem',
			[theme.breakpoints.down(650)]: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			},
		},

		carte: {
			padding: '2rem 2rem',
			height: 'auto',
			width: '370px',
		},

		listHeader: {
			marginBottom: '1rem',
		},

		listContainer: {
			listStyle: 'none',
			paddingLeft: '.5rem',
		},

		btn: {
			margin: '1rem',
			backgroundColor: '#234924',
			color: '#fff',
			'&:hover': {
				backgroundColor: '#fff',
				color: '#234924',
			},
		},

		btnWhite: {
			backgroundColor: '#fff',
			color: '#234924',
			width: '180px',
			height: '70px',
			'&:hover': {
				backgroundColor: '#234924',
				color: '#fff',
			},
		},

		carteBtn: {
			textAlign: 'center',
		},

		icon: {
			marginRight: '1rem',
			height: '15px',
			width: '15px',
		},
		url: {
			margin: '.3rem 0',
		},
		carteTitle: {
			marginBottom: '1rem',
			fontWeight: 'bold',
		},

		carteSecTitle: {
			marginBottom: '1rem',
			fontWeight: 'bold',
		},

		secondaryTitle: {
			marginTop: '5rem ',
			marginBottom: '3rem',
			fontWeight: 'bold',
		},
	})
);
export default function CardI({
	cardTitle,
	cardText,
	listItems,
	btn,
	btnLink,
}) {
	const classes = useStyles();

	return (
		<>
			{btn && (
				<div>
					<Card className={classes.carte}>
						<Typography
							variant='h5'
							className={classes.carteTitle}>
							{cardTitle}
						</Typography>
						<Typography
							variant='body1'
							className={classes.carteSecTitle}>
							{cardText}
						</Typography>
						<ul className={classes.listContainer}>
							{listItems.map((item) => {
								return (
									<li key={item.id}>
										<Grid container>
											<Grid item xs={9}>
												<Typography
													variant='body1'
													className={classes.url}>
													{item.title}
												</Typography>
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
													icon={faCheckCircle}
												/>
											</Grid>
										</Grid>
									</li>
								);
							})}
						</ul>

						<div className={classes.carteBtn}>
							<Link href={btnLink}>
								<Button
									size='large'
									className={classes.btn}
									variant='contained'>
									{' '}
									Read more
								</Button>
							</Link>
						</div>
					</Card>
				</div>
			)}

			{!btn && (
				<div>
					<Card elevation={3} className={classes.carte}>
						<Typography
							variant='h5'
							className={classes.carteTitle}>
							{cardTitle}
						</Typography>
						<Typography
							variant='body1'
							className={classes.carteSecTitle}>
							{cardText}
						</Typography>

						<ul className={classes.listContainer}>
							{listItems.map((item) => {
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
											<a target={item.target}>
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
						</ul>
					</Card>
				</div>
			)}
		</>
	);
}
