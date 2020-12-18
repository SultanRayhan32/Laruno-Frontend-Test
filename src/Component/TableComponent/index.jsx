import React , { useState } from 'react'

// REDUX MODULE
import {  useSelector  } from 'react-redux'

// COMPONENT
import TableBody from './tableBody'
import TableBodyFavorite from './tableBodyFavorite'
import NotFoundPage from '../notFoundPage'

// STYLE
import './style.css'

function TableComponent (props) {

    // PROPS
    const {
        type
    } = props

    // CALL GLOBAL STATE
    const { 
        isSearch,
        selectedTab
    } = useSelector( state=> state.data)

    // LOCAL STATE
    const [dataFavorite] = useState(JSON.parse(localStorage.getItem('favorite')))

    if (selectedTab === 0 ) {

        if (isSearch === 'normal' || type === 1 ) {
            return (
                <table className="table table-borderless table-light">
                    <thead>
                        <tr className="tr-57">
                            <th scope="col" style={{color : "#0033FF"}}>Title</th>
                            <th scope="col" style={{color : "#0033FF"}}>Year</th>
                            <th scope="col" style={{color : "#0033FF"}}>ImDB Id</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        type === "0" ?
                        <TableBody/> : <TableBodyFavorite/>
                    }
                </table>
            )
        }else if (type === "1" ) {
            return (
                <div className="not-found-movie">
                    <span>You don't have a favorite movie yet</span>
                </div>
            )
        }
        else {
            return (
                // <div className="not-found-movie">
                //     <span>The movie you are looking for was not found sfdff</span>
                // </div>
                <NotFoundPage
                    text={"The movie you are looking for was not found"}
                    isBack={true}
                />
            )
        }
    }
    else if (selectedTab === 1) {
        if (!dataFavorite ) {
            return (
                <NotFoundPage
                    text={"You don't have a favorite movie yet"}
                    isBack={false}
                />
            )
        }
        else if (dataFavorite.length === 0) {
            return (
                <NotFoundPage
                    text={"You don't have a favorite movie yet"}
                    isBack={false}
                />
            )
        }else {
            return (
                <table className="table table-borderless table-light">
                    <thead>
                        <tr className="tr-57">
                            <th scope="col" style={{color : "#0033FF"}}>Title</th>
                            <th scope="col" style={{color : "#0033FF"}}>Year</th>
                            <th scope="col" style={{color : "#0033FF"}}>ImDB Id</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        type === "0" ?
                        <TableBody/> : <TableBodyFavorite/>
                    }
                </table>
            )
        }
    }



}

export default TableComponent