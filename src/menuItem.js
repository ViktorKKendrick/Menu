import React from "react";
import axios from "axios";
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {} }
    }

    componentDidMount() {
        this.callAPI();

    }

    getRandom(max) {
        return Math.ceil((Math.random() + 2) * max);
    }

    callAPI() {
        console.log(axios)
        axios.get(this.props.url)
            .then((response) => {
                // console.log(response)
                this.setState({ data: response.data[0] });
            })
            .catch((error) => {
            })
        // .then( () => {
        // });
    }

    render() {
        return (
            // <div className="col-md-4 col-xs-12 mt-2 mb-2">
            <div className={"card h-100 text-center " + 'my-auto'}>
                <div className='row'>
                    <div className='col-lg-4 text-center mb-5 mb-lg-0 vsH' ></div>
                    <div className='col-lg-4 text-center mb-5 mb-lg-0' visibility='hidden' >
                        <img src={this.props.src} className="card-img-top image-fluid mh-50" alt="Food" />
                    </div>
                    <div className='col-lg-4 text-center mb-5 mb-lg-0 ' visibility='hidden' ></div>
                </div>


                <div className="card-body">
                    <h5 className="card-title">{this.state.data.name}</h5>
                    <p className="card-text">{this.state.data.description}</p>
                    <h5 className="card-title">$ {this.getRandom(this.props.value)}</h5>
                </div>
            </div>
            // </div>
        )
    }
}

