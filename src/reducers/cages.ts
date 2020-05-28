import { MOVE_CHESS, SELECT_CHESS } from "../constants";
import { createCages } from '../service';
import { Cage } from '../interfaces';
const initialState = createCages();

export default function CagesReducer(state = initialState, action: any) {
    const arrayCopy : Array<Cage> = [...state];

    switch (action.type){
        case SELECT_CHESS :
            const { selectedIndex, movedIndexes} = action;
            arrayCopy.forEach((cage: Cage, index: number) => {
                if (index === selectedIndex) {
                    cage.isSelected = true;
                    movedIndexes.forEach((item: number) => {
                       arrayCopy[item].isOnWay = true;
                    })
                    return;
                } else {
                    cage.isOnWay = false;
                    cage.isSelected = false;
                }
            })
            return arrayCopy;
        case MOVE_CHESS:
            let { selectedChessIndex, cageIndex} = action;
            let chessman = arrayCopy[selectedChessIndex].chessman;
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