import React from "react";

const container = {
    width: '80px',
    height: '80px',
}

interface Props {
    cage: {
        index: number,
        color: string
    };
}
export default class Cage extends React.Component<Props> {
    render() {
        return(
            <div style={{...container, backgroundColor :this.props.cage.color}}>
                {this.props.cage.index}
            </div>
        )
    }
}