import { SET_MODAL } from '../Type'

const INITIAL_STATE = {
    modalIsOpen :  false
}

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case SET_MODAL:
            return {...state,modalIsOpen : action.payload}
        default:
            return state
    }
}