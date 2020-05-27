export interface ChessMan {
    role: string,
    img: string
}

interface ChessState {
    selectedChess: string
}

export interface State {
    chess: ChessState
}