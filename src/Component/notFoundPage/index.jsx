import React from 'react'


// REDUX MODULE
import { useDispatch  } from 'react-redux'

// CALL GLOBAL ACTION
import { getMovie , changeSearch } from '../../Redux/Actions'

// STYLE
import './style.css'

// IMAGES
import svgImage from '../../Images/tes.svg'
import backImage from '../../Images/back.png'

function NotFoundPage () {

    // CALL DISPATCH
    const dispatch = useDispatch()

    let handleBack = () => {
        dispatch(changeSearch(""))
        dispatch(getMovie("all"))
    }

    return (
        <div className="nfp-container">
            <img src={svgImage} alt={'not-found'} className="nfp-image"/>
            <span>The movie you are looking for was not found</span>
            <u onClick={e=>handleBack()}> 
                <img  src={backImage} alt={'back'}/>
                Back
            </u>
        </div>
    )

}

export default NotFoundPage;