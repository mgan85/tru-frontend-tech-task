import React from 'react';
import './IconBar.css';
import IconElement from './IconElement/IconElement';

/*
 * Stateless component which show bar with icon
 * props.icons - array of icons to show
 * props.color - background color for bar
 */
const IconBar = (props) => {
    let cssClasses = "IconBar " + props.cssClasses;
    const style = {
        backgroundColor: props.color
    };

    let createIconElemnt = icon => {
        return (
            <IconElement
                key={icon.id}
                url={icon.url}
                label={icon.label}
                position={icon.position}
                padding={icon.padding}
            />
        )
    }

    let createAllIconElements = () => {
        return props.icons.map(createIconElemnt);
    }

    return(
        <div className={cssClasses} style={style}>
             {createAllIconElements()}
        </div>

    )
}

export default IconBar;