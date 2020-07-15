import {
   SELECT_CHESS,
   MOVE_CHESS
} from '../constants';

export const selectChess = (index: number, movedIndexes: Array<number>, role: string) => {
   return {
      type : SELECT_CHESS,
      selectedIndex: index,
      role,
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