import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Component } from "react";

var buttonTypes = ['Breakfast', 'Lunch', 'Dinner']

export default class Nav extends Component {
    
    render() {
        return (

            <div className={"container-fluid " + "bg-warning " + 'text-center '} >
                <div className='row'>
                    <div className='col'>
                        <BtnRender index={0}/>
                    </div>
                    <div className='col'>
                        <BtnRender index={1}/>
                    </div>
                    <div className='col'>
                        <BtnRender index={2}/>
                    </div>
                </div>
            </div>
        )
    }
}

// handleClick(){
//     this.props.updateView()

// }

function BtnRender(props) {
    return(
        <div className='col'>
        <button className='btn btn-warning'>
            {buttonTypes[props.index]}
        </button>
    </div>
    )
    

}

