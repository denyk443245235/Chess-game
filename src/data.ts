import pawn from './chessmans/pawn.png';
import castle from './chessmans/castle.png';
import elephant from  './chessmans/elephant.png';
import horse from './chessmans/horse.png';
import queen from './chessmans/queen.png';
import king from './chessmans/king.png';
export const createCages = () => {
    let cages = [];
    for (let j = 1;j < 9;j++) {
            for (let i = 1; i< 9;i++) {

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
                        img: pawn
                    }
                } else if (j === 8) {
                    switch (i) {
                        case 1 :
                        case 8 :
                            chessman = {
                                role: 'castle',
                                img: castle
                            }
                            break;

                        case 2:
                        case 7:
                            chessman = {
                                role: 'horse',
                                img: horse
                            };
                            break;
                        case 3:
                        case 6:
                            chessman = {
                                role: 'elephant',
                                img: elephant
                            };
                            break;
                        case 4:
                            chessman = {
                                role: 'queen',
                                img: queen
                            };
                            break;
                        case 5:
                            chessman = {
                                role: 'king',
                                img: king
                            };
                            break;
                        default :
                            break;
                    }
                }

                cages.push({
                    index: i,
                    color: color,
                    chessman: chessman
                });
            };

    }

    return cages;
};