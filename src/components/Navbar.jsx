import React from 'react';
import '../App';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <h1>React Books App</h1>
            </div>
          <Link to = "/favorites"> <div>Your Favorites</div></Link> 
        </div>
    );
};

export default Navbar;