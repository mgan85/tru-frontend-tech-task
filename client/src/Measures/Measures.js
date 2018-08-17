import React, { Component } from 'react';
import './Measures.css';
import axiosMeasures from "./../Utils/axiosInstances";
import QuestionResult from './../QuestionResult/QuestionResult'
import Loader from './Loader/Loader'

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
    }

    componentDidMount() {
        this.getData(this.props.dataSource);
    }

    componentDidUpdate(prevProps) {
        if (this.props.dataSource !== prevProps.dataSource) {
            this.getData(this.props.dataSource);
        }
    }

    getData(dataSource) {
        //let param = onlineData ? "measures?shoppingChannel=online" : "measures?shoppingChannel=instore"
        this.setState({loading: true});
        let config = {
                onDownloadProgress: (pe) => {
                    let percent = pe.loaded * 100 / pe.total;
                    let elem = document.querySelector("#LoaderProgressBar");
                    if(elem !== null) {
                        elem.style.backgroundImage = 'linear-gradient( to right, #048604, #048604 ' + percent + '%, #8f8fad ' + percent + '%)'
                    }
                    else {
                        console.log("Upsss");
                    }

                }
            }

        axiosMeasures.get(dataSource, config)
            .then(res => {
                this.setState({measures: res.data, loading: false})
            })
    }

    createLoader() {
        return (
            <Loader />
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