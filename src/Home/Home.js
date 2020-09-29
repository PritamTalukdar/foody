import React from 'react';
import './Home.css';
import Restaurants from './../Restaurants/Restaurants';
function Home() {
    return (
        <div className="body">
            <img 
                className="promotional_img"
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/124976813/original/a5bbfbde7c586e0b6cf481b06b2c73e139e996bd/create-restaurant-promo-or-food-promotion-video.jpg" 
                alt="Promotional"         
            />
            <Restaurants />
        </div>
    )
}
export default Home;