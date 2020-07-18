import pawn from './chessIcons/pawn.png';
import castle from './chessIcons/castle.png';
import elephant from './chessIcons/elephant.png';
import horse from './chessIcons/horse.png';
import queen from './chessIcons/queen.png';
import king from './chessIcons/king.png';
import {ChessMan, moveIndexes} from "./interfaces";
import {
   leftBoarder,
   rightBoarder,
   topBorder,
   bottomBorder
} from  './constants';


export const createCages = () => {
   let cages = [];
   let index = -1;
   
   for (let j = 1; j < 9; j++) {
      for (let i = 1; i < 9; i++) {
         let color;
         let chessman;
         
         index++;
         
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
            }
         } else if (j === 8) {
            switch (i) {
               case 1 :
               case 8 :
                  chessman = {
                     role: 'castle',
                     img: castle,
                     move: [ -10, -20],
                  }
                  break;
               
               case 2:
               case 7:
                  chessman = {
                     role: 'horse',
                     img: horse,
                     move: [ -15, -17],
                  };
                  break;
               
               case 3:
               case 6:
                  chessman = {
                     role: 'elephant',
                     img: elephant,
                     move: [ -10, -20],
                  };
                  break;
               
               case 4:
                  chessman = {
                     role: 'queen',
                     img: queen,
                     move: [ -10, -20],
                  };
                  break;
               
               case 5:
                  chessman = {
                     role: 'king',
                     img: king,
                     move: [ -1,-10,1],
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
         })
      }
   }
   return cages;
};

export const getMoveIndexes = (index: number, chessman: ChessMan) => {
   
   let moveIndexes: moveIndexes = {
      top: [],
      down: [],
      left: [],
      right: [],
      top_right:[],
      top_left:[],
      down_left:[],
      down_right:[]
   };
   
   switch (chessman.role) {
      case 'queen' :
         moveIndexes = getDiagonalWay(index, moveIndexes);
         moveIndexes = getFrontWay(index, moveIndexes);
         break;
         
      case 'elephant':
         moveIndexes = getDiagonalWay(index, moveIndexes);
         break;
   
      case 'castle':
         moveIndexes = getFrontWay(index, moveIndexes);
         break;
      default:
         chessman.move.forEach((item: number) => {
            moveIndexes.top.push(index + item);
         });
   }
   return moveIndexes;
};



const getFrontWay = (index: number, moveIndexes: any) => {
   let i = index;
   while (!topBorder.includes(i)) {
      i -= 8;
      moveIndexes.top.push(i);
   }
   i = index;
   
   while (!bottomBorder.includes(i)) {
      i += 8;
      console.log(i);
      moveIndexes.down.push(i);
      console.log(moveIndexes.down);
   }
   i = index;
   
   while (!leftBoarder.includes(i)) {
      i -= 1;
      moveIndexes.left.push(i);
   }
   i = index;
   
   while (!rightBoarder.includes(i)) {
      i += 1;
      moveIndexes.right.push(i);
   }
   
   return moveIndexes;
};


const getDiagonalWay = (index: number, moveIndexes:any) => {
   let i = index;
   
   i = index;
   while (!(leftBoarder.includes(i) || topBorder.includes(i))) {
      i-=9;
      moveIndexes.top_left.push(i);
   }
   i = index;
   
   while (!(rightBoarder.includes(i) || topBorder.includes(i)) ) {
      i-= 7;
      moveIndexes.top_right.push(i);
   }
   i = index;
   
   while (!(leftBoarder.includes(i) || bottomBorder.includes(i))) {
      i+=7;
      moveIndexes.down_right.push(i);
   }
   i = index;
   
   while (!(rightBoarder.includes(i) || bottomBorder.includes(i)) ) {
      i+= 9;
      moveIndexes.down_left.push(i);
   }
   return moveIndexes;
};