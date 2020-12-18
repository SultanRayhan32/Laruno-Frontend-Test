import {
    CHANGE_TAB,
    GET_MOVIE ,
    GET_DETAIL,
    CHANGE_SEARCH,
    SEARCH_STATUS
} from '../Type'

const INITIAL_STATE = {
    selectedTab : 0, // 0 = search movie, 1 = My Favourite
    movieList : [],
    selectedDetail : {},
    searchData : "all",
    isSearch : 'normal'
}

export default (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return {...state,selectedTab : action.payload.data}
        case GET_MOVIE :
            return {...state,movieList : action.payload.data , isSearch : "normal"}
        case GET_DETAIL :
            return {...state,selectedDetail :  action.payload.data}
        case CHANGE_SEARCH :
            return {...state,searchData : action.payload.data}
        case SEARCH_STATUS :
            return {...state,isSearch : "not found" , movieList : []}
        default:
            return state
    }
}