import React from 'react';
import './IconBar.css';
import IconElement from './IconElement/IconElement';

/*
 * Stateless component which show bar with icon
 * props.icons - array of icons to show
 * props.color - background color for bar
 */
const IconBar = (props) => {
    //Setting css rules depending on props
    let cssClasses = "IconBar " + props.cssClasses;
    const style = {
        backgroundColor: props.color
    };

    /*
     * Function create one icon component
     * icon - object with configuration
     */
    let createIconElemnt = icon => {
        return (
            <IconElement
                key={icon.id}
                url={icon.url}
                label={icon.label}
                position={icon.position}
                padding={icon.padding}
                click={icon.click}
            />
        )
    }

    //Function generate all icons for bar
    let createAllIconElements = () => {
        return props.icons.map(createIconElemnt);
    }

    return (
        <div className={cssClasses} style={style}>
            {createAllIconElements()}
        </div>

    )
}

export default IconBar;