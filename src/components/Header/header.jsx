import React from 'react';
import "./header.css";
import AvatarLogo from "../../Assets/images/dmitri.png"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../firebase';

export const Header = () => {

    return (
        // Bootstrap navbar component
        <nav className="navbar navbar-expand navbar-fixed-top">
            <div className="NavbarContainer">
                {/* Left Section */}
                <div className="LeftSection">
                    <Link to="/avatar"><img className='Avatar-logo' alt="logo" src={AvatarLogo}></img></Link>
                </div>
                {/* Middle Section visible only on medium screens */}
                <div className='MiddleSection d-none d-sm-none d-md-block'>
                    <p className='Main'>Ready to witness Pandora on 16 Dec 2022</p>
                </div>
                {/* Right Section */}
                <div className="RightSection">
                    {/* Logout Button */}
                    <div className='lgout-btn' onClick={() => { auth.signOut() }}>
                        <FontAwesomeIcon icon={faRightFromBracket} /><span><small>Logout</small></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
