import React from "react";
import { connect } from "react-redux";
import { createCages } from "../../data";
import Cage from "../Cage/Cage";
import { selectChess } from '../../actions/chess';
import './board.css';
const container = {
    border: '1px solid black',
    width: '640px',
    height:'640px',
    display: 'flex',
};

interface Props {
    selectChess: Function
}

  class Board extends React.Component<Props>{

    selectChess (chess:any) {
        this.props.selectChess(chess.index);
        console.log(chess.index);
    }

    render() {
        const cages = createCages();
        return (
            <div className='container'>
                {cages.map(cage => {
                    // @ts-ignore
                    return (
                        <div onClick={() => this.selectChess(cage)}>
                            <Cage cage={cage}/>
                        </div>
                    )
                })}
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        selectChess:(index: string) => {
            dispatch(selectChess(index));
        }
    }
};

export default connect (null, mapDispatchToProps)(Board);