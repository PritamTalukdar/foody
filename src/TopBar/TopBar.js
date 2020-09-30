import React, {useEffect} from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import './TopBar.css';
import {Link} from "react-router-dom";
import { routes } from './../routes';

const useStyles = makeStyles((theme) => ({
  grow: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    top: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'fixed',
    left: '33vw',
    color: 'rgba(var(--f52,142,142,142),1)',
    border: 'solid 1px rgba(var(--b6a,219,219,219),1)',
    justifyContent: 'center',
    //position: 'relative',
    borderRadius: '3px',
    backgroundColor: 'rgba(var(--b3f,250,250,250),1)',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.down(800)]: {
      left: '25vw',
    },
    [theme.breakpoints.down(675)]: {
      left: '140px',
      right: '240px',
    },
    [theme.breakpoints.down(475)]: {
      display: 'none',
    },
    [theme.breakpoints.up(280)]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {

  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    right: '20px',
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down(400)]: {
      right: 0,
    },
  },
}));

export default function PrimarySearchAppBar({cartCounter}) {
  let count = cartCounter || localStorage.getItem('count');
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className="toolbar">
        <Link to={{pathname: routes.home}} >
          <img 
              className="instagram"
              src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/gwnfuhywcvf7jrordlk0" 
              alt="foody logo"
          />
        </Link>
        
        
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="black" aria-label="show 4 new mails">
              <Badge id="countChange" badgeContent={count} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton color="black" aria-label="show 4 new mails">
              <Badge badgeContent={4} color="secondary">
                <FavoriteBorderSharpIcon />
              </Badge>
            </IconButton>
            <IconButton>
                <img
                    className="img"
                    alt="test"
                    src="https://www.iconfinder.com/data/icons/photography-2/512/YPS__human_avatar_portrait_photography_picture_photo-512.png"
                />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
