import React from 'react';
import Home from './Home';
import PrimarySearchAppBar from './../TopBar/TopBar';
import './../App.css';
function HomeWrapper() {
    return (
        <div className="App">
            <PrimarySearchAppBar />
            <Home />
        </div>
    )
}
export default HomeWrapper;
