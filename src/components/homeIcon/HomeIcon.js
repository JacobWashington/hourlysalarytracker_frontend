import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import './HomeIcon.css'; // Import your CSS file

const HomeIcon = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const location = useLocation(); // Get the current location

    const handleClick = () => {
        navigate('/'); // Navigate to the home page
    };

    // Hide the icon if the current path is '/'
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className="home-icon" onClick={handleClick}>
            <span role="img" aria-label="home">🏠</span> {/* Example home icon */}
        </div>
    );
}

export default HomeIcon;