import { ActionTypes } from "../constants/action-types"

export const setProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products
    }
}

export const seletedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}

export const removeSeletedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}