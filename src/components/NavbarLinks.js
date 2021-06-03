import React from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

const NavbarLinks = () => {
    const { user } = useSelector((state) => state.AuthReducer);
	const dispatch = useDispatch();
    return (
        <div>
            {user?  <div className="nav-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </div>
                    :
                    <div className="nav-center">
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Sign up</Link></li>
                    </div>
            }
        </div>
    )
}

export default NavbarLinks
