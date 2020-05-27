import React from "react";
import { connect } from "react-redux";
import { selectChess } from '../../actions/cages';
import { State } from "../../interfaces";
import { Cage } from '../../interfaces';
import CageComponent from "../Cage/Cage";
import './board.css';

interface Props {
    cages: Array<Cage>,
    selectChess: Function
}

  class Board extends React.Component<Props>{

    selectChess (index: number) {
        let chessman = this.props.cages[index].chessman;
        if (!!chessman) {

            let moveIndexes: Array<number> = [];

            chessman.move.map((item: number) => {
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
                        <div onClick={() => this.selectChess(index)}>
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
        cages: state.cages
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        selectChess:(index: string, moveIndexes: Array<number>) => {
            dispatch(selectChess(index, moveIndexes));
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Board);