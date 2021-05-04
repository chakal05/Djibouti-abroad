import React from 'react';
import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';
import {
	FormControl,
	MenuItem,
	Select,
	InputLabel,
} from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) => createStyles({}));
export default function Countries() {
	const [country, setCountry] = React.useState('');
	const classes = useStyles();
	const router = useRouter();
	const handleChange = (event) => {
		setCountry(event.target.value);
		if (
			country !== undefined &&
			countries.includes(event.target.value)
		)
			router.push({
				pathname: '/countryInfo',
				query: { country: event.target.value },
			});
	};

	const countries = [
		'E.A.U',
		'China',
		'Belgium', 
		'Netherland',
		'Luxemburg',
		'U.E',
		'Egypt',
		'Erythree',
		'France',
		'Inde',
		'Kenya',
		'Russie',
		'Maroc',
		'Sudan',
		'Turkey',
		'Yemen',
		'USA',
		'Suisse',
		'SGermany',
		'Cuba',
		'Japon',
		'UK',
		'SaudiArabia',
		'Qatar',
	];
	return (
		<div>
			<FormControl
				variant='outlined'
				style={{
					width: '400px',
					marginTop: '2rem',
				}}>
				<InputLabel id='demo-simple-select-label'>
					Choose a country
				</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={country}
					onChange={handleChange}>
					{countries.map((item) => (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>{' '}
		</div>
	);
}
