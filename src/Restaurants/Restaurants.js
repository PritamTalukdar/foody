import React from 'react';
import './Restaurants.css';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import Data from './../food.json';
function Restaurants() {
    return (
        <div className="restaurants_body">
            {Object.keys(Data).map(
                (values,index) => {
                    return <RestaurantCard index={index} categorys={Data[values].categorys} restaurantInfo={Data[values].restaurantInfo}/>;
            })}
        </div>
    )
}
export default Restaurants;