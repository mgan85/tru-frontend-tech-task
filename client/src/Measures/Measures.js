import React, { Component } from 'react';
import './Measures.css';
import axiosMeasures from "./../Utils/axiosInstances"

/*
 * state component which show measures in app
 */
class Measures extends Component {
    constructor(props) {
        super();

        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div className="Measures">

            </div>
        );
    }
}