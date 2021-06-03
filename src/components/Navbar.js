import React, { Component } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import NavbarLinks from './NavbarLinks';
import {Link} from "react-router-dom"

export default class Navbar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar"> 
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" className="navbar-logo">
                            AAST
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FiAlignJustify className="nav-icon"/>
                        </button>
                    </div> 
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links" } >
                        <NavbarLinks/>
                    </ul>
                </div>
            </nav>
        )
    }
}
