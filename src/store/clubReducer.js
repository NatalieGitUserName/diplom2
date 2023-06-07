const defaultState = {

    offers: [],

    selectedOffer: [],

    interact: false
}


const INTERACT = "INTERACT"
const SETOFFERS = "SETOFFERS"
const SETSELECTEDOFFERS = "SETSELECTEDOFFERS"

export const clubReducer = (state = defaultState, action) => {

    switch (action.type) {

        case INTERACT:
            return {...state, interact: action.payload}
        case SETOFFERS:
            return {...state, offers: action.payload}
        case SETSELECTEDOFFERS:
            return {...state, selectedOffer: action.payload}
        default:
            return state
    }
}

export const interactAction = (payload) => ({type: INTERACT, payload})
export const setOffersAction = (payload) => ({type: SETOFFERS, payload})
export const setSelectedOffersAction = (payload) => ({type: SETSELECTEDOFFERS, payload})