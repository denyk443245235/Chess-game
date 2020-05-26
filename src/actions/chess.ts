import {SELECT_CHESS} from '../constants';
export const selectChess = (index: string) => {
    return {
        type : SELECT_CHESS,
        payload : index
    }
}