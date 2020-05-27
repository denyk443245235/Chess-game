import { SELECT_CHESS } from "../constants";
import { createCages } from '../service';
import { Cage } from '../interfaces';
const initialState = createCages();

export default function CagesReducer(state = initialState, action: any) {

    switch (action.type){
        case SELECT_CHESS :
            let { selectedIndex, movedIndexes} = action;
            const arrayCopy : Array<Cage> = [...state];
            arrayCopy.forEach((cage: Cage, index) => {
                if (index == selectedIndex) {
                    cage.isSelected = true;
                    console.log(action);
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
            break;
        default:
            return state;
    }
}