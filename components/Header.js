import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import {
	Toolbar,
	Button,
	Typography,
	Container,
	Dialog,
	AppBar,
	List,
	ListItem,
	ListItemText,
	Divider,
	Slide,
} from '@material-ui/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const useStyles = makeStyles((theme) => ({
	toolbar: {
	//	borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarTitle: {
    //	flex: 1,
    flexGrow: 1
	},
	toolbarSecondary: {
	//	justifyContent: 'space-between',
	//	overflowX: 'auto',
	},
	toolbarLink: {
	//	padding: theme.spacing(1),
    //	flexShrink: 0,
    
	},
	appBar: {
	//	position: 'relative',
	},
	title: {
	//	marginLeft: theme.spacing(2),
	//	flex: 1,
	},
}));
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default function Header(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Container xs='lg'>
				<AppBar
					position='static'
					color='transparent'
					elevation={0}>
					<Toolbar className={classes.toolbar}>
						<Image
							src='/djibemblem.png'
							layout='fixed'
							alt='Djibouti logo'
							width={50}
							height={50}
						/>
						<Typography
							component='h4'
							variant='h6'
							color='inherit'
							align='center'
							noWrap
							className={classes.toolbarTitle}>
							{'DJIBOUTI ABROAD'}
						</Typography>
						<Button color='default' onClick={handleClickOpen}>
							Menu
						</Button>
						<Dialog
							fullScreen
							open={open}
							onClose={handleClose}
							TransitionComponent={Transition}>
							<AppBar className={classes.appBar}>
								<Toolbar>
									<Button onClick={handleClose}>
										<FontAwesomeIcon icon={faTimes} />
									</Button>

									<Typography
										variant='h6'
										className={classes.title}>
										Sound
									</Typography>
									<Button
										autoFocus
										color='inherit'
										onClick={handleClose}>
										save
									</Button>
								</Toolbar>
							</AppBar>
							<List>
								<ListItem button>
									<ListItemText
										primary='Phone ringtone'
										secondary='Titania'
									/>
								</ListItem>
								<Divider />
								<ListItem button>
									<ListItemText
										primary='Default notification ringtone'
										secondary='Tethys'
									/>
								</ListItem>
							</List>
						</Dialog>
					</Toolbar>
				</AppBar>
			</Container>
			<Divider />
		</div>
	);
}
