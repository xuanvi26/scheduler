import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
    const interviewerListItems = props.interviewers.map(interviewer => 
        <InterviewerListItem 
            key={interviewer.id} 
            name={interviewer.name} 
            avatar={interviewer.avatar} 
            setInterviewer={(event) => props.onChange(interviewer.id)} 
            selected={props.value===interviewer.id}
        />
    );
    return (
        <section className="interviewers">
            <h4 className="interviewers__header text--light">Interviewer</h4>
            <ul className="interviewers__list">{interviewerListItems}</ul>
        </section>
    );
};



