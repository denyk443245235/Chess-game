import { MOVE_CHESS, SELECT_CHESS } from "../constants";
import { createCages } from '../service';
import { Cage } from '../interfaces';
const initialState = createCages();

export default function CagesReducer(state = initialState, action: any) {
    const arrayCopy : Array<any> = [...state];

    switch (action.type){
        case SELECT_CHESS :
            const { selectedIndex, movedIndexes} = action;
            arrayCopy.forEach((cage: Cage, index: number) => {
                if (index === selectedIndex) {
                    cage.isSelected = true;
                    for (let i = 0; i < movedIndexes.length; i++) {
                        let item = movedIndexes[i];
                        let chessman = arrayCopy[item].chessman;
                        if (!chessman ) {
                            arrayCopy[item].isOnWay = true;
                        }

                    }
                    return;
                }
            })
            return arrayCopy;
        case MOVE_CHESS:
            let { selectedChessIndex, cageIndex} = action;
            const chessman = arrayCopy[selectedChessIndex].chessman;
            cageIndex-= 1;
            arrayCopy[cageIndex].chessman = chessman;
            delete  arrayCopy[selectedChessIndex].chessman;

            arrayCopy.forEach((cage: Cage, index) => {
                cage.isOnWay = false;
                cage.isSelected = false;
            })
            return arrayCopy;
        default:
            return state;
    }
}