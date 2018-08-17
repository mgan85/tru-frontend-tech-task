import React from "react";
import "./IconElement.css";

/*
 * Stateless component represent icon
 * props.id - unique id for icon
 * props.url - url for icon
 * props.label - optional text under icon
 * props.position - icon position (left/ centre/ right)
 */
const IconElement = (props) => {
    let cssClasses = "Icon " + props.position || "Left";
    cssClasses += props.label !== undefined ? " WithLabel" : "";

    let createLabel = () => {
        return (
            props.label !== undefined ? <label>{props.label}</label> : null
        )
    }

    return (
        <div className={cssClasses} onClick={props.click}>
            <img src={props.url} alt="icon"/>
            {createLabel()}
        </div>
    )
}

export default IconElement;