import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';
import {
	Toolbar,
	Button,
	Typography,
	Container, 
	Menu,
	MenuItem,
	AppBar,
} from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		toolbar: {
			borderBottom: `1px solid ${theme.palette.divider}`,
			height: '80px',
		},
		toolbarTitle: {
			flexGrow: 1,
			fontWeight: 'bolder',
		},
		toolbarSecondary: {
			height: '70px',
			display: 'flex',
			justifyContent: 'center',
			overflowX: 'auto',
			[theme.breakpoints.down(1000)]: {
				display: 'none',
			},
		},
		lien: {
			listStyle: 'none',
			display: 'flex',
		},

		toolbarLink: {
			padding: theme.spacing(1),
			flexShrink: 0,
		},

		secondNav: {
			[theme.breakpoints.up(1000)]: {
				display: 'none',
			},
		},

		language: {
			[theme.breakpoints.down(650)]: {
				display: 'none',
			},
		},
	})
);

export default function Header() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] =
		React.useState<null | HTMLElement>(null);
	const sections = [
		{ id: 0, url: '/', title: 'Home' },

		{
			id: 2,
			url: '/forCitizens/',
			title: 'For Djiboutians',
		},
		{
			id: 3,
			url: '/forForeigners/',
			title: 'For Foreigners',
		},

		{
			id: 1,
			url: '/forCitizens/consularReg',
			title: 'Consular Registration',
		},

		{
			id: 4,
			url: '/forCitizens/countryInfo',
			title: 'Embassies and Consulates',
		},
	];
	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		setAnchorEl(event.currentTarget);
	};

  

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Container maxWidth='lg'>
				<AppBar
					position='static'
					color='transparent'
					elevation={0}>
					<Toolbar component='nav' variant='dense' className={classes.toolbar}>
						<Link href='/'>
							<a>
								<Image
									src='/djibemblem.png'
									layout='fixed'
									alt='Djibouti logo'
									width={50}
									height={50}
								/>
							</a>
						</Link>
						<Link href='/'>
							<a className={classes.toolbarTitle}>
								{' '}
								<Typography
									variant='h4'
									color='inherit'
									align='center'
									noWrap>
									DJIBOUTI ABROAD 
								</Typography>
							</a>
						</Link>

						<Button
							className={classes.language}
							variant='outlined'
							size='small'>
							language
						</Button>
						<div className={classes.secondNav}>
							<Button
								onClick={handleClick}
								variant='outlined'
								size='small'
								style={{ marginLeft: '0.5rem' }}>
								{' '}
								Menu{' '}
							</Button>
							<Menu
								id='simple-menu'
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}>
								{sections.map((element) => (
									<Link key={element.id} href={element.url}>
										<a>
											<MenuItem value={element.url}>
												{' '}
												<Typography variant='body1'>
													{element.title}
												</Typography>
											</MenuItem>
										</a>
									</Link>
								))}
							</Menu>
						</div>
					</Toolbar>
					<Toolbar
						component='nav'
						variant='dense'
						className={classes.toolbarSecondary}>
						<ul className={classes.lien}>
							{sections.map((section) => (
								<li
									style={{ marginRight: '1rem' }}
									key={section.id}>
									<Link href={section.url}>
										<a>
											<Typography variant='h6'>
												{section.title}
											</Typography>
										</a>
									</Link>
								</li>
							))}
						</ul>
					</Toolbar>
				</AppBar>
			</Container>
		</>
	);
}
