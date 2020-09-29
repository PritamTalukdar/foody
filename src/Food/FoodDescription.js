import React, { useState } from 'react';
import './FoodDescription.css';
import { Button } from '@material-ui/core';
import PrimarySearchAppBar from '../TopBar/TopBar';

function FoodDescription({menuItems}) {
    const dishName = menuItems.name;
    const cuisine = menuItems.subItems[0].cuisine_name;
    const price = menuItems.subItems[0].price;
    const [cartCounter, setCartCounter] = useState(localStorage.getItem("count") || 0);
    const handleAddToCart = () => {
            localStorage.setItem("count", parseInt(cartCounter)+1);   
            setCartCounter(localStorage.getItem("count"));            
    }
    const handleDeleteFromCart = () => {
        cartCounter > 0 ? 
            localStorage.setItem("count", parseInt(cartCounter)-1) : 
            localStorage.setItem("count", 0);
        setCartCounter(localStorage.getItem("count"));      
    }
    
    return (
        <>
        <PrimarySearchAppBar cartCounter={cartCounter}/>
        <div className="food_description">
            <div className="food_description_header">
                <img
                    className="food_description_header_img"
                    src="https://shemins.scdn2.secure.raxcdn.com/wp-content/uploads/2017/03/shemins-chicken-tikka-masala-LR.jpg"
                />
                <div className="top-left">
                    <h1>{dishName}</h1>
                    <h4>{cuisine}</h4>
                </div>
            </div>
            <br/><br/>
            <h3>Ratings: 4.3</h3>
            <h3>Price: ${price}</h3>
            <h3>
                <img 
                    className="veg_nonveg"
                    alt="Veg"
                    src="https://spng.pinpng.com/pngs/s/74-740774_veg-icon-png-circle-transparent-png.png"
                />
                Veg
            </h3>
            <button className="add_btn" onClick={handleAddToCart}>Add to Cart</button>
            {cartCounter > 0 
                ? <button className="add_btn" onClick={handleDeleteFromCart}>
                    Delete from Cart
                  </button> 
                : <></>}
            <p>A large-sized bowl of fragrant 
                basmati rice topped with farm-bred 
                succulent chicken marinated in Italian 
                herbs and cooked to juicy perfection.?...
            </p>
            <h1>Main Ingredient</h1>
            <div className="ingredient">
                <div className="ingredient_btn">
                    <h3>Vegetables</h3>
                    <p>$40</p>
                </div>
                <div className="ingredient_btn">
                    <h3>Chicken</h3>
                    <p>$40</p>
                </div>
                <div className="ingredient_btn">
                    <h3>Beef</h3>
                    <p>$40</p>
                </div>
            </div>
            <h1>Side Order</h1>
            <div className="ingredient">
                <div className="ingredient_btn">
                    <h3>Rice</h3>
                    <p>$40</p>
                </div>
                <div className="ingredient_btn">
                    <h3>Nun</h3>
                    <p>$40</p>
                </div>
                <div className="ingredient_btn">
                    <h3>Papadum</h3>
                    <p>$40</p>
                </div>
            </div>
        </div>
        </>
        
    )
}
export default FoodDescription;
