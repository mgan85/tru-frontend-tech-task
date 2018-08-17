import React, { Component } from 'react';
import './Measures.css';
import axiosMeasures from "./../Utils/axiosInstances";
import loading from "./../Images/loading.svg";

/*
 * stateful component which show measures in app
 */
class Measures extends Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
            loading: true
        }

        this.getData(true);
    }

    getData(onlineData) {
        let param = onlineData ? "measures?shoppingChannel=online" : "measures?shoppingChannel=instore"

        axiosMeasures.get(param)
            .then(data => {
                this.setState({data: data, loading: false})
                console.log(data);
            })
    }

    createLoader() {
        return (
            <img src={loading} alt="loading" />
        )
    }

    createMeasureComponent () {


        return (
            <div className="Measures">
                aa
            </div>
        )
    }

    render() {
        return (
            this.state.loading ? this.createLoader() : this.createMeasureComponent()
        );
    }
}

export default Measures;