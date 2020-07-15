import React from "react";
import { connect } from "react-redux";
import { selectChess, moveChess } from '../../actions/cages';
import { State } from "../../interfaces";
import { Cage } from '../../interfaces';
import CageComponent from "../Cage/Cage";
import './board.css';
import { getMoveIndexes } from "../../service";

interface Props {
   cages: Array<Cage>,
   selectedChess: any,
   selectChess: Function,
   moveChess: Function
}

class Board extends React.Component<Props>{

   chessAction (index: number) {
      const selectedChessIndex = this.props.selectedChess.index;
      let cage =  this.props.cages[index];
      let chessman = cage.chessman;
      if (cage.isOnWay) {
         this.props.moveChess(cage.index, selectedChessIndex);
      }
      
      if (!!chessman) {
         let moveIndexes = getMoveIndexes(index, chessman);
         this.props.selectChess(index, moveIndexes, chessman.role);
      }
   }
   
   render() {
      const cages = this.props.cages;
      return (
         <div className='container'>
            {cages.map((cage, index) => {
               return (
                  <div onClick={() => this.chessAction(index)} key={index}>
                     <CageComponent cage={cage}/>
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
      selectedChess: state.selectedChess
   }
}

const mapDispatchToProps = (dispatch: any) => {
   return {
      selectChess:(index: number, moveIndexes: Array<number>, role: string) => {
         dispatch(selectChess(index, moveIndexes, role));
      },
      moveChess: (cageIndex: number, selectedChessIndex: number) => {
         dispatch(moveChess(cageIndex, selectedChessIndex));
      }
   }
};

export default connect (mapStateToProps, mapDispatchToProps)(Board);