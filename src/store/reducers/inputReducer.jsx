import { RESET_INPUT, SET_INPUT_VALUE, SET_REQUEST_VALUE } from "../actions/inputActions";

const initialState = {
    request: "",
    headerInput: "",
};

export function inputReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return { ...state, headerInput: action.payload.value };
        case SET_REQUEST_VALUE:
            return { ...state, request: action.payload };
        case RESET_INPUT:
            /* return { ...initialState, [action.payload]: "" }; */
            return { ...initialState, headerInput: "" };
        default:
            return state;
    }
}