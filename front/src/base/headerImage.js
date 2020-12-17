import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStyles } from '../style';
import { Card, CardContent, Typography } from '@material-ui/core';
import classNames from 'classnames';

const options = [
  'Home',
  'Projects',
  'Courses',
  'About'
];

const ITEM_HEIGHT = 48;

function IconMenu({classes}){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div className={classes.logo}>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon className={classes.whiteColor} />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
                }}
            >
                {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                    {option}
                </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

function ImageMenu({classes}){
    return (
        <div>
            <img className={classes.logoImage} src="/src/img/logo.jpg" />
        </div>
    )
}

function HeaderImage(){
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.noPadding}>
                <div className={classes.rightText}>
                    <IconMenu classes={classes} />
                    <ImageMenu classes={classes} />
                    <Typography variant="h4" className={classes.centerText}>
                        I Have some Real and Fantastic story for you
                    </Typography>
                    <Typography variant="h6" className={classes.centerText}>
                        This website is under construction and will complete ASAP
                    </Typography>
                    <Typography variant="h6" className={classes.centerText}>
                        You can follow my projects here
                    </Typography>
                    <div className={classes.centerText}>
                        <a href="https://github.com/datomegasherly" target="_blank"><img src="src/img/github.png" width="180" /></a>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default HeaderImage;