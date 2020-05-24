import React from "react";
import {createCages} from "../../data";
import Cage from "../Cage/Cage";
import './board.css';
const container = {
    border: '1px solid black',
    width: '640px',
    height:'640px',
    display: 'flex',
};

export default class Board extends React.Component<any>{
    render() {
        const cages = createCages();
        // @ts-ignore
        return (
            <div className='container'>
                {cages.map(cage => {
                    return (
                        <Cage cage={cage}/>
                    )
                })}
            </div>
        )
    }

}