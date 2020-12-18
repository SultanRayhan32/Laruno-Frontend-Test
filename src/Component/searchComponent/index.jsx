import React , { useState} from 'react'


/// REDUX MODULE
import { useDispatch } from 'react-redux'

// GLOBAL ACTION
import { changeSearch } from '../../Redux/Actions'

// // IMAGES 
import searchIcon from '../../Images/icon.png'

// STYLE
import './style.css'


function SearcComponent () {

    // LOCAL STATE
    const [isFocus,setIsFocus] = useState(false)

    // CALL DISPATCH 
    const dispatch = useDispatch()

    return (
        <div 
            className={`search-content-01 ${isFocus && 'search-content-01-shadow'}`}
        >
            <div className="search-img-content-01">
                <img
                    src={searchIcon}
                    alt={'search'}
                />
            </div>
            <input 
                className="search-input-content-01" type="text"
                onChange={e=>dispatch(changeSearch(e.target.value))}
                placeholder={"Cari Film.."}
                onFocus={e=>setIsFocus(true)}
                onBlur={e=>setIsFocus(false)}
            />
        </div>
    )

}

export default SearcComponent;