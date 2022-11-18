import React from 'react';
import "./Home.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import { Link } from 'react-router-dom';



const Home = () => {

    const user = useSelector(selectUser) //from redux user component

    return (
        <div className="Home-container">
            <div className="Card-container">
                {/* To display userName in the Home Page */}
                <h4 className='Greeting'>Hello! {" "}{user.displayName}</h4>
                <div className="Homecard">
                    <div className="Lines"></div>
                    {/* Link to Avatar Page */}
                    <div className="Content">
                        <Link to="/avatar" className='Pandora-link'>Open Pandoras Box</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;



