import React from "react";
import './cage.css';
import {ChessMan} from "../../interfaces";

interface Cage {
    index: number,
    color: string,
    chessman?: ChessMan
}

interface Props {
    cage: Cage,
    isActiveChessSelected: boolean
}

export default class CageСomponent extends React.Component<Props> {
    public cage: Cage;

    constructor (props: Props) {
        super(props);
        this.cage = this.props.cage;
    };

    render() {
        let chessman;
        if (this.cage.chessman) {
             chessman = <img className="chessman" src={this.cage.chessman.img}/>
        }

        const isActiveChessSelected = this.props.isActiveChessSelected;
        let cageColor = isActiveChessSelected ? 'yellow' : this.cage.color;

        return (
            <div className="cage-container" style={{backgroundColor : cageColor}}>
                {chessman}
            </div>
        )
    }
}