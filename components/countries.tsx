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

const useStyles = makeStyles((theme: Theme) => createStyles({}))
export default function Countries() {
    const [age, setAge] = React.useState('');
	const classes = useStyles();
	const handleChange = (event) => {
		setAge(event.target.value);
	};
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
					value={age}
					onChange={handleChange}>
					<MenuItem value={10}>Andalouse</MenuItem>
					<MenuItem value={20}>Algerie</MenuItem>
					<MenuItem value={30}>Albanie</MenuItem>
				</Select>
			</FormControl>{' '}
		</div>
	);
}
