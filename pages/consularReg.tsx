import {
	Container,
	Grid,
	Typography,
	TextField,
} from '@material-ui/core';
import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topColorWhite: {
			backgroundColor: '#edf4ed',
			padding: '3rem',
			borderTopLeftRadius: '1rem',
			borderTopRightRadius: '1rem',
			borderBottomLeftRadius: '1rem',
			// [theme.breakpoints.down(650)]: {
			// 	marginBottom: '-9rem',
			// 	paddingTop: '2rem',
			// },
		},
		titleContainer: {
			padding: '1rem',
			// width: '70%',
			// paddingTop: '3rem',
			// paddingLeft: '1rem',
			// paddingRight: '1rem',
			// [theme.breakpoints.up(1100)]: {
			// 	//	paddingTop: '5rem',
			// },
			// [theme.breakpoints.up(651)]: {
			// 	width: '50%',
			// 	//paddingTop: '2rem',
			// },
		},

		imgContainer: {
			backgroundColor: '#edf4ed',
			padding: '1rem',
			borderBottomRightRadius: '1rem',
			borderBottomLeftRadius: '1rem',

			//	width: '30%',
			// [theme.breakpoints.up(651)]: {
			// 	width: '300px',
			// 	position: 'absolute',
			// 	right: '3rem',
			// 	top: '30%',
			// 	marginLeft: '1rem',
			// },
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

		// carteContainer: {
		// 	padding: '1rem',
		// 	[theme.breakpoints.down(650)]: {
		// 		display: 'flex',
		// 		justifyContent: 'center',
		// 		alignItems: 'center',
		// 		width: '100%',
		// 	},
		// },

		// carte: {
		// 	padding: '1rem',
		// 	height: '200px',
		// 	width: '400px',
		// 	margin: '1rem',
		// },
		// url: {
		// 	' &:hover': {
		// 		fontWeight: 'bold',
		// 	},
		// },
	})
);

export default function theMinistry() {
	const classes = useStyles();
	return (
		<main>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item className={classes.topColorWhite} xs={12}>
						{' '}
						<Typography variant='h3'>
							{' '}
							{`Consular registration`}
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography
							gutterBottom
							variant='h5'
							style={{ marginTop: '2rem', padding: '1rem' }}>
							Here you can provide information about where you
							are and how you can be contacted during your stay
							abroad. If necessary, the information can be used
							by the Ministry of Foreign Affairs or the embassy
							to contact you should a consular crisis situation
							occur. They are saved for the time period you
							specify, however, a maximum of one year. If you
							are planning a stay longer than one year, an
							annual renewal is required. You can unsubscribe
							yourself whenever you want.
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Grid container>
							<form noValidate>
								<Grid item xs={6}>
									<TextField label='Name' variant='filled' />
								</Grid>
							</form>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
}
