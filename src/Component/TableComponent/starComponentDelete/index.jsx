import React from 'react'

// STYLE
import './style.css'

function StarComponentDelete (props) {

    const { handleAddFavorite , el,selectedDetail , isRun } = props

    return (
        <div 
            className="star-outside-content2"
            onClick={e=>handleAddFavorite(el)}
        >
             <span 
                className="fa fa-star star-delete"
                style={{color : selectedDetail && selectedDetail.imdbID === el.imdbID && isRun && "#0033FF"}}
            >
            </span>
        </div>
    )

}

export default StarComponentDelete