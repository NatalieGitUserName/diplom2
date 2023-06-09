const defaultState = {

    offers: [],

    selectedOffer: [],

    error: [],

    user: null,

    interact: false
}


const INTERACT = "INTERACT"
const SETOFFERS = "SETOFFERS"
const SETSELECTEDOFFERS = "SETSELECTEDOFFERS"
const SETERROR = "SETERROR"
const SETUSER = "SETUSER"

export const clubReducer = (state = defaultState, action) => {

    switch (action.type) {

        case INTERACT:
            return {...state, interact: action.payload}
        case SETOFFERS:
            return {...state, offers: action.payload}
        case SETSELECTEDOFFERS:
            return {...state, selectedOffer: action.payload}
        case SETERROR:
            return {...state, error: action.payload}
        case SETUSER:
            return {...state, user: action.payload}

        default:
            return state
    }
}

export const interactAction = (payload) => ({type: INTERACT, payload})
export const setOffersAction = (payload) => ({type: SETOFFERS, payload})
export const setSelectedOffersAction = (payload) => ({type: SETSELECTEDOFFERS, payload})
export const setErrorAction = (payload) => ({type: SETERROR, payload})
export const setUserAction = (payload) => ({type: SETUSER, payload})