import React from "react";
import State from "./State";
import LifeCycle from "./LifeCycle";

class Container extends React.Component {
    render() {
        return (
            <>
                <State />
                <LifeCycle />
            </>
        );
    }
}

export default Container;
