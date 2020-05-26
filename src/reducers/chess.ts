import { SELECT_CHESS } from '../constants';

const initialState = {
   selectedChess: undefined
}
export default function selectedChessReducer(state = initialState, action:any) {
    switch (action.type){
        case SELECT_CHESS :
            return {...action.payload, selectedChess: action.payload};
            break;
        default:
            return state;

    }
}