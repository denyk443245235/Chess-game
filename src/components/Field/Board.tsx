import React from "react";
import { connect } from "react-redux";
import { createCages } from "../../service";
import { State } from "../../interfaces";
import { selectChess } from '../../actions/chess';
import Cage from "../Cage/Cage";
import './board.css';
const container = {
    border: '1px solid black',
    width: '640px',
    height:'640px',
    display: 'flex',
};

interface Props {
    selectChess: Function,
    selectedChess: string
}

  class Board extends React.Component<Props>{

    selectChess (index: number) {
        this.props.selectChess(index);
    }

    render() {
        const cages = createCages();
        return (
            <div className='container'>
                {cages.map((cage, index) => {

                    const selectedChess = parseInt(this.props.selectedChess);
                    return (
                        <div onClick={() => this.selectChess(index)}>
                            <Cage cage={cage} isActiveChessSelected={(selectedChess === index && !!cage.chessman)}/>
                        </div>
                    )
                })}
            </div>
        )
    }

};

const mapStateToProps = (state: State) => {
    const { selectedChess } = state.chess;
    return { selectedChess }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        selectChess:(index: string) => {
            dispatch(selectChess(index));
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Board);