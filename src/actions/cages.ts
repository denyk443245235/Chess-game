import { SELECT_CHESS } from '../constants';
export const selectChess = (index: string, movedIndexes: Array<number>) => {
    return {
        type : SELECT_CHESS,
        selectedIndex: index,
        movedIndexes
    }
}