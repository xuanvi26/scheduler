import React from "react";
import "components/InterviewListItem.scss";
const classNames = require('classnames')

export default function InterviewListItem(props) {
    let interviewerItemClass = classNames({
        "interviewers__item": true,
        "interviewers__item--selected": props.selected,
    });
    let interviewerImageClass = classNames({
        "interviewers__item-image": true,
        "interviewers__item--selected-image": props.selected
    });

    return (
        <li className={interviewerItemClass} onClick={() => props.setInterviewer(props.name)}> 
            <img
                className={interviewerImageClass}
                src={props.avatar}
                alt={props.name}
            />
            {props.name}
        </li>
    );
};


