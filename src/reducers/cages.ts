import { MOVE_CHESS, SELECT_CHESS } from "../constants";
import { createCages } from '../service';
import { Cage } from '../interfaces';
const initialState = createCages();

export default function CagesReducer(state = initialState, action: any) {
   const arrayCopy : Array<any> = [...state];
   
   switch (action.type){
      case SELECT_CHESS :
         const {selectedIndex, movedIndexes} = action;
         arrayCopy.forEach((cage: Cage, index: number) => {
            if (index === selectedIndex) {
               cage.isSelected = true;
               for (let index in movedIndexes) {
                  let direction = movedIndexes[index];
                  for (let i = 0;i < direction.length;i++) {
                     let item = direction[i];
                     let chessman = arrayCopy[item].chessman;
                     if (!chessman) {
                        arrayCopy[item].isOnWay = true;
                     } else {
                        break;
                     }
                  }
               }
            }
         })
         return arrayCopy;
         
      case MOVE_CHESS:
         let { selectedChessIndex, cageIndex} = action;
         const chessman = arrayCopy[selectedChessIndex].chessman;
         cageIndex-= 1;
         arrayCopy[cageIndex].chessman = chessman;
         delete arrayCopy[selectedChessIndex].chessman;
         arrayCopy.forEach((cage: Cage) => {
            cage.isOnWay = false;
            cage.isSelected = false;
         })
         return arrayCopy;
         
      default:
         return state;
   }
}