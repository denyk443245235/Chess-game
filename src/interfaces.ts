export interface ChessMan {
    move: Array<number>;
    role: string,
    img: string
}

interface ChessState {
    selectedChessIndex: number,
    movedIndexes: Array<number>
}

export interface State {
    chess: ChessState,
    cages: any
}

export interface Cage {
    index: number,
    color: string
    chessman?: ChessMan,
    isSelected?: boolean,
    isOnWay?: boolean
}