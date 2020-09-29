import React from 'react';
import './../App.css';
import FoodDescription from './FoodDescription';
import PrimarySearchAppBar from '../TopBar/TopBar';
import { useHistory } from 'react-router-dom';

function FoodWrapper() {
    const history = useHistory();
    const menuItems = history.location.menuItems;
    
    return (
        <div className="App">
            <PrimarySearchAppBar />
            <FoodDescription menuItems={menuItems}/>
        </div>
    )
}
export default FoodWrapper;
