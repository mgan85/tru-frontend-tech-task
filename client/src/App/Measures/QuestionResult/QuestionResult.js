import React from 'react';
import './QuestionResult.css';

/*
 * Stateless component which show result for question
 * props.category - what kind of question
 * props.downRange - min. rate for question
 * props.upRange - max. rate for question
 * props.rate - rate for question
 * props.question - question
 */
const questionResult = props => {
  let cssClasses = 'QuestionResult ';
  let value = props.rate || props.downRange;

  //Function css rules need to create progress bar showing value
  const createProgressBarStyle = () => {
    let percent = value * 100 / props.upRange;
    let color;

    if (props.rate < 6) {
      color = '#FF5C5C';
    } else if (props.rate < 8) {
      color = '#F5B31F';
    } else {
      color = '#62DDA9';
    }

    return {
      backgroundImage:
        'linear-gradient( to right, ' +
        color +
        ', ' +
        color +
        ' ' +
        percent +
        '%, #e8e5ef ' +
        percent +
        '%)',
    };
  };

  switch (props.category) {
    case 'Service':
      cssClasses += 'Service ';
      break;
    case 'Product':
      cssClasses += 'Product ';
      break;
    case 'Value':
      cssClasses += 'Value ';
      break;
    case 'Recommend':
      cssClasses += 'Recommend ';
      break;
    case 'Experience':
      cssClasses += 'Experience ';
      break;
    case 'Ease of Use':
      cssClasses += 'Service ';
      break;
    default:
      console.warn(
        "Something goes wrong. Unknown category '" +
          props.category +
          "' for QuestionResult component"
      );
  }

  //Function create text for measure
  let createText = () => {
    let fullElement = (
      <span>
        <p className="Val">{value} </p>
        <p> out of {props.upRange}</p>
      </span>
    );

    let emptyElement = <p>No data for {props.question} yet</p>;

    return props.rate === undefined ? emptyElement : fullElement;
  };

  return (
    <div className={cssClasses}>
      <label>{props.question}</label>
      <input
        type="range"
        style={createProgressBarStyle()}
        min={props.downRange}
        max={props.upRange * 100}
        className="range"
        disabled
      />
      {createText()}
    </div>
  );
};

export default questionResult;
