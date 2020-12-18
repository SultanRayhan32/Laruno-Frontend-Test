import React from 'react'

// COMPONENT
import ModalDetail from '../modalDetail'
import TableComponent from '../TableComponent'
import SearchComponent from '../searchComponent'

// STYLE
import './style.css'

function MovieList () {
    
    return (
        <div className="movie-list-01">
            <SearchComponent/>
            <TableComponent type="0"/>
            <ModalDetail/>           
        </div>
    )

}

export default MovieList;