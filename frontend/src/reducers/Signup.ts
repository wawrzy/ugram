import { SIGNUP } from "../constants";

const initialState = {
    tokenUrl: "",
};

export function signup(state = initialState, action): object {
    switch (action.type) {
        case SIGNUP:
            state.tokenUrl = action.tokenUrl;
            location.href = "/#/login";
            return { ...state };
        default:
            return state;
    }
}
