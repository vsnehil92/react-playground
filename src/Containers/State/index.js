import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

class State extends React.Component {
    render() {
        return (
            <>
                <h1>This is State manipulation</h1>
                <br />
                <ClassComponent />
                <br />
                <FunctionComponent />
            </>
        );
    }
}

export default State;
