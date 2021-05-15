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
		topColorGreen: {
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

export default function workingInDjib() {
	const classes = useStyles();
	return (
		<>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item xs={12} className={classes.topColorGreen}>
						{' '}
						<Typography
							variant='h2'
							style={{
								fontWeight: 'bold',
							}}>
							{' '}
							Employment of foreigners
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant='h4'
							style={{
								margin: '3rem 0',
								textAlign: 'center',
								fontWeight: 'bold',
							}}>
							Legislation
						</Typography>

						<Paper
							elevation={5}
							style={{
								padding: '1rem',
								width: '80%',
								margin: '0 auto',
							}}>
							<Typography variant='h6'>Article 24:</Typography>
							<Typography variant='body1'>
								Any foreigner may exercise a salaried activity
								under a fixed-term employment contract,
								subject to the provisions below.
							</Typography>
							<br />
							<Typography variant='h6'>Article 25:</Typography>
							<Typography variant='body1'>
								The employment contract for foreigners must be
								recorded in writing. It is subject to a visa
								issued by the Minister in charge of Labor.
							</Typography>
							<br />
							<Typography variant='h6'>
								Article 26:{' '}
							</Typography>
							<Typography variant='body1'>
								The visa of the contract of the foreign worker
								leads to the issuance of a work permit issued
								by the Minister in charge of Labor. No foreign
								worker can benefit from a residence visa "for
								work" if he has not previously obtained the
								said authorization of work.
							</Typography>
							<br />
							<Typography variant='h6'>
								Article 27:
							</Typography>{' '}
							<Typography variant='body1'>
								{' '}
								This authorization is temporary. It is issued
								for a period of one year; it can be renewed
								several times; it must be presented to any
								request from the services of the Ministry in
								charge of Labor or the visa services of the
								Ministry of the Interior. When a foreign
								worker leaves, for whatever reason his
								employer, the latter must contact the Service
								de la Labor a declaration of separation from
								service. The work authorization immediately
								lapses.
							</Typography>
							<br />
							<Typography variant='h6'>
								Article 28:{' '}
							</Typography>{' '}
							<Typography variant='body1'>
								{' '}
								The Minister in charge of Labor may refuse to
								issue or renew the work permit when the
								professional qualification of the worker does
								not meet, or no longer, the needs of the
								national economy. or when he national skills
								and qualifications equivalent to those of the
								foreign worker exist in the labor market. The
								refusal by the Minister in charge of Labor may
								be the subject of appeals opened by common law
								against the decisions administrative.
							</Typography>
							<Typography variant='h6'>
								Article 29:{' '}
							</Typography>{' '}
							<Typography variant='body1'>
								{' '}
								The request for a work permit must be made
								with the filing of the employment contract
								with the services of Employment investigating
								the case. The latter issues the applicant with
								a dated receipt. Without response, within 60
								days, from the date of filing of the
								employment contract by the employer, with the
								departments concerned of the Ministry of
								Labor, the authorization is deemed to be
								granted and the employment contract, de facto
								legalized.
							</Typography>
							<Typography variant='h6'>
								Article 30:{' '}
							</Typography>{' '}
							<Typography variant='body1'>
								{' '}
								he visa application is the responsibility of
								the employer. If the visa is refused, the
								contract is null and void. If the omission of
								visa is due by the employer, the worker has
								the right to have the employment tribunal
								declared the nullity of the contract and may,
								if necessary, claim damages.
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
