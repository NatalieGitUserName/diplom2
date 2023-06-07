const defaultState = {

    offers: [],

    interact: false
}


const INTERACT = "INTERACT"
const SETOFFERS = "SETOFFERS"

export const clubReducer = (state = defaultState, action) => {

    switch (action.type) {

        case INTERACT:
            return {...state, interact: action.payload}
        case SETOFFERS:
            return {...state, offers: action.payload}
        default:
            return state
    }
}

export const interactAction = (payload) => ({type: INTERACT, payload})
export const setOffersAction = (payload) => ({type: SETOFFERS, payload})