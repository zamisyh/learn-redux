import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "Zami",
            category: "Programmer"
        }
    ]
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return state
        default:
            return state;
    }
}

