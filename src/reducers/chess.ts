import { SELECT_CHESS } from "../constants";

const initialState = {
    selectedChessIndex: undefined
};

export default function ChessReducer(state = initialState, action: any) {
    console.log(action);
    switch (action.type) {
        case SELECT_CHESS :
            return {
                ...state,
                selectedChessIndex: action.selectedIndex
            };
        default:
            return state;
    }
}