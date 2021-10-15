import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Body(props) {
    return (
        <div>
            <wrap style={{ backgroundImg: props.background }}>
                <div className={'container'}>
                    <div className={'row'}>

                    </div>
                </div>
                Body
            </wrap>
        </div>
    )
    //     style(){
    //     backgroundImg: style="background-image: url(img/BGWP.jpg); background-size:cover; background-repeat: no-repeat; background-attachment: fixed; background-position:center 0px;"
    // }

}
function Row(props) {
    return (
        <>
            {props.children}
        </>
    )
};
