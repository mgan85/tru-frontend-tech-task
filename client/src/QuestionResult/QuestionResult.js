import React from "react";
import "./QuestionResult.css";

/*
 * Stateless component which show result for question
 * props.category - what kind of question
 * props.downRange - min. rate for question
 * props.upRange - max. rate for question
 * props.rate - rate for question
 * props.question - question
 */
const questionResult = (props) => {
    let cssClasses = "QuestionResult ";
    let value = props.rate || props.downRange;

    let setcssClasses = () => {
        switch (props.category) {
            case "Service (Ease of use)":
                cssClasses += "Service "
                break;
            case "Product":
                cssClasses += "Product "
                break;
            case "Value":
                cssClasses += "Value "
                break;
            case "Recommend":
                cssClasses += "Recommend "
                break;
            case "Experience":
                cssClasses += "Experience "
                break;
            default:
                console.warn("Something goes wrong. Unknown category '" + props.category + "' for QuestionResult component");
        }

        if(props.rate < 6) {
            cssClasses += "Negative";
        }else if(props.rate < 8) {
            cssClasses += "Neutral";
        } else {
            cssClasses += "Positive";
        }
    }();

    let createText = () => {
        let fullElement = (
            <span>
                <input type="text" className="value" value={props.rate}/>
                <p>out of  {props.upRange}</p>
            </span>
        )

        let emptyElement = (
                <p>"No data for {props.question} yet"</p>
        )

        return  props.value === null ? emptyElement : fullElement;
    }

    return (
        <div className={cssClasses}>
            <label>{props.question}</label>
            <input type="range" min={props.downRange} max={props.upRange * 100} value={props.rate * 100} className="range" disabled/>
            {createText()}
        </div>
    )

}

export default questionResult;
