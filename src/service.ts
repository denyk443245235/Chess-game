import pawn from './chessIcons/pawn.png';
import castle from './chessIcons/castle.png';
import elephant from './chessIcons/elephant.png';
import horse from './chessIcons/horse.png';
import queen from './chessIcons/queen.png';
import king from './chessIcons/king.png';
import {ChessMan} from "./interfaces";
export const createCages = () => {
    let cages = [];
    let index = 0;
    for (let j = 1; j < 9; j++) {
            for (let i = 1; i< 9; i++) {

                index++;

                let color;
                let chessman;

                if (j % 2 === 0) {
                    color = i % 2 === 0 ? 'white' : 'brown';
                } else {
                    color = i % 2 === 0 ? 'brown' : 'white';
                }

                if (j === 7) {
                    chessman = {
                        role: 'pawn',
                        img: pawn,
                        move: [ -8, -16],
                        x: i,
                        y: j
                    }
                } else if (j === 8) {
                    switch (i) {
                        case 1 :
                        case 8 :
                            chessman = {
                                role: 'castle',
                                img: castle,
                                move: [ -10, -20],
                                x: i,
                                y: j
                            }
                            break;

                        case 2:
                        case 7:
                            chessman = {
                                role: 'horse',
                                img: horse,
                                move: [ -15, -17],
                                x: i,
                                y: j
                            };
                            break;
                        case 3:
                        case 6:
                            chessman = {
                                role: 'elephant',
                                img: elephant,
                                move: [ -10, -20],
                                x: i,
                                y: j
                            };
                            break;
                        case 4:
                            chessman = {
                                role: 'queen',
                                img: queen,
                                move: [ -10, -20],
                                x: i,
                                y: j
                            };
                            break;
                        case 5:
                            chessman = {
                                role: 'king',
                                img: king,
                                move: [ -1,-10,1],
                                x: i,
                                y: j
                            };
                            break;
                        default :
                            break;
                    }
                }

                cages.push({
                    index: index,
                    color: color,
                    chessman: chessman
                });
            };

    }

    return cages;
};

export const getMoveIndexes = (index: number, chessman: ChessMan) => {

    let moveIndexes: Array<number> = [];
let {x,y} = chessman;
    switch (chessman.role) {
        case 'queen' :
            for (let i = index ; i >= 0; i-= 8) {
                if (i === index)
                    continue;
                moveIndexes.push(i);
            }
            for (let i = index ; i < 63; i+= 8) {
                if (i === index)
                    continue;
                moveIndexes.push(i);
            }
            for (let i = index ; ; i-= 1) {
                if (index % 8 === 0 )
                    break;
                    if (i === index) {
                    continue;
                }

                moveIndexes.push(i);
                if (i % 8 === 0) {
                    break;
                }
            };
            for (let i = index ; ; i+= 1) {
                if (index % 7 === 0 )
                    break;
                if (i === index) {
                    continue;
                }

                moveIndexes.push(i);
                if (i  % 7 === 0) {
                    break;
                }
            }

            break;
        default:
            chessman.move.forEach((item: number) => {
                moveIndexes.push(index + item);
            });
    }
    return moveIndexes;
};