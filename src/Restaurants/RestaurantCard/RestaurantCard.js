import React from 'react';
import './RestaurantCard.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import RestaurantWrapper from './../RestaurantWrapper';
import {Link} from "react-router-dom";
import { routes } from '../../routes';
function RestaurantCard({index, categorys, restaurantInfo}) {
    const name = restaurantInfo.name;
    const cuisine = restaurantInfo.cuisine;
    const rating = restaurantInfo.rating;
    const logoUrl = restaurantInfo.logo;

    return (
        <Link to={{
            pathname: routes.restaurant,
            categorys: categorys,
            restaurantInfo: restaurantInfo,
        }} 
            className="restaurant_card"
        >
            <img
                alt={name}
                src={logoUrl} 
            />
            <h3>{name}</h3>
            <span>{cuisine}</span>
            <StarBorderOutlinedIcon />
            <span>{rating}</span>
        </Link>
        
    )
}
export default RestaurantCard;