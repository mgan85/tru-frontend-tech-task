import React, { Component } from 'react';
import './Measures.css';
import axiosMeasures from './../../Utils/axiosInstances';
import QuestionResult from './QuestionResult/QuestionResult'
import Loader from './Loader/Loader'

/*
 * stateful component which show measures in app
 */
class Measures extends Component {
    constructor() {
        super();
        this.state = {
            measures: [],
            loading: true
        }
    }

    //After mounting we download data
    componentDidMount() {
        this.getData(this.props.dataSource);
    }

    /*
     * After updating component we check if data source was changed
     * If this happen we download new data
     */
    componentDidUpdate(prevProps) {
        if (this.props.dataSource !== prevProps.dataSource) {
            this.getData(this.props.dataSource);
        }
    }

    /*
     * Function download data. In middle downlading we show loader
     * dataSource - from where we take data
     */
    getData(dataSource) {
        this.setState({loading: true});

        /*
         * Object with configuration for axios, which allow us
         * tracking downloading progress
         */
        let config = {
            onDownloadProgress: (pe) => {
                let percent = pe.loaded * 100 / pe.total;
                let elem = document.querySelector("#LoaderProgressBar");
                if (elem !== null) {
                    elem.style.backgroundImage = "linear-gradient( to right, #048604, #048604 " + percent + "%, #8f8fad " + percent + "%)";
                }
                else {
                    console.error("Can't find element represent loader");
                }

            }
        }

        axiosMeasures.get(dataSource, config)
            .then(res => {
                this.setState({measures: res.data, loading: false});
            })
    }

    //Function create Loader component
    createLoader() {
        return (
            <Loader
                id={"LoaderProgressBar"}
            />
        )
    }

    //Function create component showing result for one question
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

    /*
     * Function create components for all measures except first which is just an
     * indication for the frontend about the kind of data that is returned
     */
    createAllQuestionResult() {
        return this.state.measures.filter(m => m.$id > 1).map(this.createQuestionResult);
    }

    //Function create component with measures
    createMeasureComponent() {
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