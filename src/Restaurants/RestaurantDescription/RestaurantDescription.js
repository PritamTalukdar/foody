import React from 'react';
import './RestaurantDescription.css';
import RestaurantCard from './../RestaurantCard/RestaurantCard';
import FoodCard from './../FoodCard/FoodCard';
function RestaurantDescription({restaurantInfo, categorys}) {
    console.log("categorys", categorys);
    const name = restaurantInfo.name || "Joes Burger";
    const cuisine = restaurantInfo.cuisine || "American style";
    const url = restaurantInfo.restaurant_banner || "";
    return (
        <div className="restaurant_description">
            <div className="restaurant_header">
                <img
                    className="restaurant_header_img"
                    src={url}
                />
                <div className="top-left">
                    <h1>{name}</h1>
                    <h4>{cuisine}</h4>
                </div>
            </div>
            
            <div className="food_cards_body">
                {Object.keys(categorys).map((values,index) => {
                    return (
                        <div key={index}>
                            <h1>{categorys[values].name}</h1>
                            {Object.keys(categorys[values].menuItems).map((value,id)=>{
                                let menuItems = categorys[values].menuItems[value];
                                return <FoodCard menuItems={menuItems}/>
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default RestaurantDescription;
