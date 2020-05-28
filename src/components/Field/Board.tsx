import React from "react";
import { connect } from "react-redux";
import { selectChess, moveChess } from '../../actions/cages';
import { State } from "../../interfaces";
import { Cage } from '../../interfaces';
import CageComponent from "../Cage/Cage";
import './board.css';

interface Props {
    cages: Array<Cage>,
    selectedChessIndex: number,
    selectChess: Function,
    moveChess: Function
}

  class Board extends React.Component<Props>{

      chessAction (index: number) {
        const selectedChessIndex = this.props.selectedChessIndex;
        let cage =  this.props.cages[index];
        let chessman = cage.chessman;
        if (cage.isOnWay) {
            this.props.moveChess(cage.index, selectedChessIndex);
        }

        if (!!chessman) {
            let moveIndexes: Array<number> = [];
            chessman.move.forEach((item: number) => {
                moveIndexes.push(index + item);
            });

            this.props.selectChess(index, moveIndexes);
        }
    }

    render() {
        const cages = this.props.cages;

        return (
            <div className='container'>
                {cages.map((cage, index) => {
                    return (
                        <div onClick={() => this.chessAction(index)} key={index}>
                            <CageComponent cage={cage}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }

};

const mapStateToProps = (state: State) => {
    return {
        cages: state.cages,
        selectedChessIndex: state.chess.selectedChessIndex
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        selectChess:(index: number, moveIndexes: Array<number>) => {
            dispatch(selectChess(index, moveIndexes));
        },
        moveChess: (cageIndex: number, selectedChessIndex: number) => {
            dispatch(moveChess(cageIndex, selectedChessIndex));
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Board);