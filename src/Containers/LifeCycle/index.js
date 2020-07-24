import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

class LifeCycle extends React.Component {
    render() {
        return (
            <>
                <h1>This is LifeCycle manipulation</h1>
                <br />
                <ClassComponent />
                <br />
                <FunctionComponent />
            </>
        );
    }
}

export default LifeCycle;
