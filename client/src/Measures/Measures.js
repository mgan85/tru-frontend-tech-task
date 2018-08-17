import React, { Component } from 'react';
import './Measures.css';
import axiosMeasures from "./../Utils/axiosInstances";
import loading from "./../Images/loading.svg";
import QuestionResult from './../QuestionResult/QuestionResult'

/*
 * stateful component which show measures in app
 */
class Measures extends Component {
    constructor(props) {
        super();
        this.state = {
            measures: [],
            loading: true
        }

        this.getData(true);
    }

    getData(onlineData) {
        let param = onlineData ? "measures?shoppingChannel=online" : "measures?shoppingChannel=instore"

        axiosMeasures.get(param)
            .then(res => {
                this.setState({measures: res.data, loading: false})
            })
    }

    createLoader() {
        return (
            <img src={loading} alt="loading" />
        )
    }

    createQuestionResult(question) {
        return (
            <QuestionResult
                key={question.$id}
                category={question.formattedCaption}
                downRange={1}
                upRange={9}
                rate={question.cells[0].value}
                question={question.formattedCaption}
            />
        )
    }

    createAllQuestionResult() {
        return this.state.measures.filter(m => m.$id > 1).map(this.createQuestionResult);
    }

    createMeasureComponent () {
        return (
            <div className="Measures">
                {this.createAllQuestionResult()}
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