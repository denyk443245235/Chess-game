import React from "react";
import { Cage } from "../../interfaces";
import './cage.css';

interface Props {
    cage: Cage,
}

class CageСomponent extends React.Component<Props> {
    public cage: Cage;

    constructor (props: Props) {
        super(props);
        this.cage = this.props.cage;
    };

    render() {
        const isSelected  = this.cage.isSelected;
        const isOnWay = this.cage.isOnWay;
        const cageColor = isSelected || isOnWay ? "yellow" : this.cage.color;
        let chessman;

        if (this.cage.chessman) {
             chessman = <img className="chessman" src={this.cage.chessman.img}/>
        }

        return (
            <div className="cage-container" style={{backgroundColor : cageColor}}>
                {chessman}
            </div>
        )
    }
}


export default CageСomponent;