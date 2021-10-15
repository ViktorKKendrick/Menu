import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import menuItem from './menuItem'



export default function Body(props) {
    return (
        <div>
            <wrap style={{ backgroundImg: props.background }}>
                <div className={'container'}>
                    <div className={'row'}>
                        <h1 className='text-center visibility:hidden' > </h1>
                        {/* h3? */}
                        <div className='col-lg-5 text-center mb-5 mb-lg-0'>
                            <menuItem
                        url="https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type/5"
                        value={7}
                        src=""
                            />
                        </div>
                    </div>
                </div>
                Body
            </wrap>
        </div>
    )


}
// function Row(props) {
//     return (
//         <>
//             {props.children}
//         </>
//     )
// };
