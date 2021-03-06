import React, {useState} from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
    const [interviewer, setInterviewer] = useState(props.interviewer || null);
    const [name, setName] = useState(props.name || "");

    function reset() {
        setName("");
        setInterviewer(null);
    }

    function cancel() {
        reset();
        props.onCancel();
    }

    return (
        <main className="appointment__card appointment__card--create">
            <section className="appointment__card-left">
                <form autoComplete="off">
                <input
                    className="appointment__create-input text--semi-bold"
                    name="student name"
                    type="text"
                    value={name}
                    placeholder={"Enter Student Name"}
                    onChange={event => setName(event.target.value)}
                    onSubmit={event => event.preventDefault()}
                />
                </form>
                <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
            </section>
            <section className="appointment__card-right">
                <section className="appointment__actions">
                    <Button danger onClick={cancel}>Cancel</Button>
                    <Button confirm onClick={props.onSave(name, interviewer)}>Save</Button>
                </section>
            </section>
        </main>
    )
}