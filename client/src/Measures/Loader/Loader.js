import React from 'react';
import './Loader.css';
import loading from "./../../Images/loading.svg";

/*stateless
 */
const Loader = (props) => {
    return (
        <div className="Loader">
            <img id="LoaderImg" src={loading} alt="loading"/>
            <input id="LoaderProgressBar" type="range"/>
        </div>
    )
}

export default Loader;