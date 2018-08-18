import React from 'react';
import './Loader.css';
import loading from './../../../Images/loading.svg';

/*
 * stateless component showing loading progress
 */
const Loader = (props) => {
    return (
        <div className="Loader">
            <img id="LoaderImg" src={loading} alt="loading"/>
            <input id={props.id} type="range"/>
        </div>
    )
}

export default Loader;