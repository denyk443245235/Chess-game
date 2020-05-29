import { SELECT_CHESS } from "../constants";

const initialState = {
    index: null
};

export default function ChessReducer(state = initialState, action: any) {
    console.log(action);
    switch (action.type) {
        case SELECT_CHESS :
            return {
                ...state,
                index: action.selectedIndex,
                role: action.role
            };
        default:
            return state;
    }
}