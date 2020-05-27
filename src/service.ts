import pawn from './chessIcons/pawn.png';
import castle from './chessIcons/castle.png';
import elephant from './chessIcons/elephant.png';
import horse from './chessIcons/horse.png';
import queen from './chessIcons/queen.png';
import king from './chessIcons/king.png';
export const createCages = () => {
    let cages = [];
    let index = -1;
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
                        move: [ -8, -16]
                    }
                } else if (j === 8) {
                    switch (i) {
                        case 1 :
                        case 8 :
                            chessman = {
                                role: 'castle',
                                img: castle,
                                move: [ -10, -20]
                            }
                            break;

                        case 2:
                        case 7:
                            chessman = {
                                role: 'horse',
                                img: horse,
                                move: [ -15, -17]
                            };
                            break;
                        case 3:
                        case 6:
                            chessman = {
                                role: 'elephant',
                                img: elephant,
                                move: [ -10, -20]
                            };
                            break;
                        case 4:
                            chessman = {
                                role: 'queen',
                                img: queen,
                                move: [ -10, -20]

                            };
                            break;
                        case 5:
                            chessman = {
                                role: 'king',
                                img: king,
                                move: [ -10, -20]

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