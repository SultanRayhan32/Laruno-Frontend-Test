import React from 'react'

// STYLE
import './style.css'

// IMAGES
import refImage from '../../Images/ref.svg'

function Navbar () {

    return (
        <div className="navbar-container-88">
            <div className="navbar-content-88">
                <span>Movie</span>
                <div className="navbar-circle-88">
                    <img src={refImage} alt="ref"/>
                </div>
            </div>
        </div>
    )

}

export default Navbar