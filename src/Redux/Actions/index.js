// TYPE
import {
    CHANGE_TAB,
    GET_MOVIE,
    GET_DETAIL,
    CHANGE_SEARCH,
    SEARCH_STATUS,
    SET_MODAL
} from '../Type'

// MODULE
import axios from 'axios'

export const changeTab = (data) => {
    return (dispatch) => {
        dispatch({
            type : CHANGE_TAB,
            payload : {
                data
            }
        })
    }
}

export const changeDetail = (data) => {
    return (dispatch) => {
        dispatch({
            type : GET_DETAIL,
            payload : {
                data
            }
        })
    }
}

export const getMovie = (searchStr) => {
    return (dispatch) => {
        axios({
            method : "GET",
            url : `http://www.omdbapi.com/?s=${searchStr === "" ? "end" : searchStr }&apikey=5250ae0c`
        })
        .then(({data})=>{
            if (Array.isArray(data.Search) || searchStr === "") {
                dispatch({
                    type : GET_MOVIE,
                    payload : {
                        data : data.Search
                    }
                })
            }
            else {
                dispatch({
                    type : SEARCH_STATUS
                })
            }
        })
        .catch(err=>{
            console.log(err , ' << ERR')
        })
    }
}

export const changeSearch = (data) => {
    return (dispatch) => {
        dispatch({
            type : CHANGE_SEARCH,
            payload : {
                data
            }
        })
    }
}

export const setModal = (data) => {
    
    return (dispatch) => {
        dispatch({
            type : SET_MODAL,
            payload : data
        })
    }

}