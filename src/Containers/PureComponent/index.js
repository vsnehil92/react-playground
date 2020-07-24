import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

class PureComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [
                { title: "excercise" },
                { title: "cooking" },
                { title: "Reacting" },
            ],
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState((oldState) => {
                return { taskList: [...oldState.taskList] };
            });
        }, 1000);
    }

    render() {
        return (
            <>
                <h1>This is Pure Compnent example</h1>
                <br />
                {this.state.taskList.map((task, i) => {
                    return <ClassComponent key={i} title={task.title} />;
                })}
                <br />
                {this.state.taskList.map((task, i) => {
                    return <FunctionComponent key={i} title={task.title} />;
                })}
            </>
        );
    }
}

export default PureComponent;
