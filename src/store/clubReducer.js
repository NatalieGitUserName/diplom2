const defaultState = {
    interact: false
}


const INTERACT = "INTERACT"

export const clubReducer = (state = defaultState, action) => {

    switch (action.type) {

        case INTERACT:
            return {...state, interact: action.payload}
        default:
            return state
    }
}

export const interactAction = (payload) => ({type: INTERACT, payload})