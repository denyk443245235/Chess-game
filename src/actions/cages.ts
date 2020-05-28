import {
    SELECT_CHESS,
    MOVE_CHESS
} from '../constants';
export const selectChess = (index: number, movedIndexes: Array<number>) => {
    return {
        type : SELECT_CHESS,
        selectedIndex: index,
        movedIndexes
    }
};

export const moveChess = (cageIndex: number, selectedChessIndex: number) => {
    return {
        type : MOVE_CHESS,
        selectedChessIndex,
        cageIndex
    }
}