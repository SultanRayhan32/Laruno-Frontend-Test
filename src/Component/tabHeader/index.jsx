import React from 'react'

// REDUX MODULE
import { useSelector , useDispatch } from 'react-redux'

// GLOBAL ACTION
import { changeTab } from '../../Redux/Actions'

// STYLE
import './style.css'

function TabHeader () {

    // CALL GLOBAL STATE
    const { 
        selectedTab
     } = useSelector( state=> state.data)

    // CALL GLOBAL ACTION
    const dispatch = useDispatch()

    return (
        <div className="tab-header">

            <div 
                onClick={e=>dispatch(changeTab(0))}
                className={`tab-header-item${selectedTab === 0 ? "-selected" : ""}`}
            >
                <span>Search Movie</span>
            </div>

            <div 
                onClick={e=>dispatch(changeTab(1))}
                className={`tab-header-item${selectedTab === 1 ? "-selected" : ""}`}
            >
                <span>My Favorite</span>
            </div>

        </div>
    )

}

export default TabHeader