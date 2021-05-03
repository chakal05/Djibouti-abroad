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
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		toolbar: {
			borderBottom: `1px solid ${theme.palette.divider}`,
		},
		toolbarTitle: {
			flexGrow: 1,
		},
		toolbarSecondary: {
			display: 'flex',
			justifyContent: 'center',
			overflowX: 'auto',
			[theme.breakpoints.down(650)]: {
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
			[theme.breakpoints.up(650)]: {
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
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
		null
	);
	const sections = [
		{ id: 0, url: '/', title: 'Home' },
		{ id: 1, url: '/theMinistry', title: 'The Ministry' },
		{ id: 2, url: '/foreignPol', title: 'Foreign politic' },
		{ id: 3, url: '/visitDjib', title: 'Visit Djibouti' },
		{ id: 4, url: '/diploMiss', title: 'Diplomatic missions' },
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
		<div>
			<Container maxWidth='lg'>
				<AppBar
					position='static'
					color='transparent'
					elevation={0}>
					<Toolbar className={classes.toolbar}>
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
									component='h2'
									variant='h5'
									color='inherit'
									align='center'
									noWrap>
									Djibouti Abroad
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
									<MenuItem
										key={element.id}
										value={element.url}>
										{' '}
										<Link href={element.url}>
											<a>
												<Typography variant='body1'>
													{element.title}
												</Typography>
											</a>
										</Link>
									</MenuItem>
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
		</div>
	);
}
