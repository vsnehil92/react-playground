import React from "react";
import State from "./State";
import LifeCycle from "./LifeCycle";
import PureComponent from "./PureComponent";

class Container extends React.Component {
    render() {
        return (
            <>
                <State />
                <LifeCycle />
                <PureComponent />
            </>
        );
    }
}

export default Container;
