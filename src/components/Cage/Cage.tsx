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
        const cageStyle = isSelected || isOnWay ?
            { backgroundColor: "yellow", outline: "1px solid black"} :  { backgroundColor: this.cage.color};
        let chessman;

        if (this.cage.chessman) {
             chessman = <img alt="" className="chessman" src={this.cage.chessman.img}/>
        }

        return (
            <div className="cage-container" style={cageStyle}>
                {chessman}
            </div>
        )
    }
}

export default CageСomponent;