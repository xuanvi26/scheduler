import React from "react";
import "components/DayListItem.scss";
const classNames = require("classnames");

export default function DayListItem(props) {
    let dayListItemClass = classNames({
        "day-list__item--selected": props.selected,
        "day-list__item--full": props.spots === 0
    });
    console.log(props)
    return (
        <li className={dayListItemClass} onClick={() => props.setDay(props.name)}>
            <h2 className="text--regular">{props.name}</h2>
            <h3 className="text--light">{props.spots}</h3>
        </li>
    );
}