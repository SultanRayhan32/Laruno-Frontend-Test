import React from 'react';

// STYLE
import './style.css'

function StarComponent (props) {

    const { handleDeleteFavorite , el, selectedDetail , isRun  } = props

    return (
        <div 
            className="star-outside-content2"
            onClick={e=>handleDeleteFavorite(el.imdbID)}
        >
            <div className="small-cirlce-1">

            </div>
            <div className="small-cirlce-2">

            </div>
            <span 
                className="fa fa-star star-favorite"
                style={{color : selectedDetail && selectedDetail.imdbID === el.imdbID && isRun && "#0033FF"}}
            >
            </span>
        </div>
    )

}

export default StarComponent;