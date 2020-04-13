// import React from "react"
import {createStore} from "redux"

const initialState = {
    name: '',
    address: '',
    city: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: ''
}

// export const UPDATE_NAME = "UPDATE_NAME";
// export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
// export const UPDATE_CITY = "UPDATE_CITY";
// export const UPDATE_ZIP = "UPDATE_ZIP";
// export const UPDATE_IMG = "UPDATE_IMG";
// export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
// export const UPDATE_RENT = "UPDATE_RENT";

export const UPDATE_STEPONE = "UPDATE_STEPONE";
export const UPDATE_STEPTWO = "UPDATE_STEPTWO";
export const UPDATE_STEPTHREE = "UPDATE_STEPTHREE";

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_STEPONE: {
            return { ...state, ...payload}
        }
        case UPDATE_STEPTWO: {
            return { ...state, ...payload}
        }
        case UPDATE_STEPTHREE: {
            return { ...state, ...payload}
        }
        default: 
            return state;
    }
}

export default createStore(reducer);