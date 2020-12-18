import React , { useEffect } from 'react'

// REDUX MODULE
import { useSelector , useDispatch  } from 'react-redux'

// CALL GLOBAL ACTION
import { getMovie } from './Redux/Actions'

// STYLE
import './index.css'

// COMPONENT
import Navbar from './Component/Navbar'
import TabHeader from './Component/tabHeader'
import MovieList from './Component/movieList'
import FavouriteList from './Component/favouriteList'

function App () {

    // CALL DISPATCH
    const dispatch = useDispatch()

    // CALL GLOBAL STATE
    const { selectedTab, searchData} = useSelector( state=> state.data)

    // HOOKS
    useEffect(()=>{
      dispatch(getMovie(searchData))
    },[dispatch,searchData])

    return (
      <div style={{width : "100%"}}>

        <Navbar/>
        <div className="container root">
          <TabHeader/>
            {
              selectedTab === 0 ? <MovieList/> : <FavouriteList/>
            }
        </div>
      </div>

    )

}

export default App;