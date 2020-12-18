import React from 'react'


// REDUX MODULE
import { useDispatch  } from 'react-redux'

// CALL GLOBAL ACTION
import { getMovie , changeSearch , changeTab } from '../../Redux/Actions'

// STYLE
import './style.css'

// IMAGES
import svgImage from '../../Images/tes.svg'
import backImage from '../../Images/back.png'

function NotFoundPage (props) {

    const {
        text,isBack
    } = props

    // CALL DISPATCH
    const dispatch = useDispatch()

    let handleBack = () => {
        dispatch(changeSearch(""))
        dispatch(getMovie("all"))
    }

    return (
        <div className="nfp-container">
            <img src={svgImage} alt={'not-found'} className="nfp-image"/>
            <span>{text}</span>
            {
                isBack ?
                <u onClick={e=>handleBack()}> 
                    <img  src={backImage} alt={'back'}/>
                    Back
                </u> :

                <u onClick={e=>dispatch(changeTab(0))}> 
                    <img  src={backImage} alt={'back'}/>
                    Add Favorite
                </u>
            }
        </div>
    )

}

export default NotFoundPage;