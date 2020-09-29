import React from 'react';
import './../App.css';
import PrimarySearchAppBar from '../TopBar/TopBar';
import RestaurantDescription from './RestaurantDescription/RestaurantDescription';
import { useHistory } from 'react-router-dom';
function RestaurantWrapper() {
    const history = useHistory();
    const restaurantInfo = history.location.restaurantInfo;
    const categorys = history.location.categorys;
    return (
        <div className="App">
            <PrimarySearchAppBar />
            <RestaurantDescription restaurantInfo={restaurantInfo} categorys={categorys}/>
        </div>
    )
}
export default RestaurantWrapper;


