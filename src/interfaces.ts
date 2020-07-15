export interface ChessMan {
   move: Array<number>;
   role: string,
   img: string,
   x: number,
   y: number
}

interface ChessState {
   index: number | undefined,
}

export interface State {
   selectedChess: ChessState,
   cages: Array<Cage>
}

export interface Cage {
   index: number,
   color: string
   chessman?: ChessMan,
   isSelected?: boolean,
   isOnWay?: boolean,
}

export interface moveIndexes {
   top: Array<number>,
   down: Array<number>,
   left: Array<number>,
   right: Array<number>;
}