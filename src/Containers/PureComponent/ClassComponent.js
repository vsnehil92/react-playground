import React from "react";

class ClassComponent extends React.PureComponent {
    render() {
        console.log("class task added");
        return <div>{this.props.title}</div>;
    }
}


export default ClassComponent;
