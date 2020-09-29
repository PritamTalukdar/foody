import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './FoodCard.css';
import { routes } from '../../routes';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    foodDescription: {
        marginLeft: '20px',
    },
    avatar: {
        width: '100px',
        height: '100px',
        borderRadius: 0,
    },
    root: {
        borderBottom: '1px solid grey',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function AlignItemsList({menuItems}) {
    const classes = useStyles();
    const dishName = menuItems.name;
    const price = menuItems.price || "$218";
    return (
        <Link to={{
                pathname: routes.food,
                menuItems: menuItems,
            }} 
            className="link_css"
        >
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar 
                            className={classes.avatar}
                            alt={dishName}
                            src="https://b.zmtcdn.com/data/dish_photos/fd0/22627887b0a35b5b2ef2f292edc6efd0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" />
                    </ListItemAvatar>
                    <ListItemText
                        className={classes.foodDescription}
                        primary={dishName}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    {price}
                                </Typography>
                                <br />
                                {"A bowl full of goodness, some dry chilli paneer laid atop traditional veg ..."}
                            </React.Fragment>
                        }
                    />
                    <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <MoreHorizIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Link>
        
    )
}
