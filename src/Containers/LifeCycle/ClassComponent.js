import React from "react";

class ClassComponent extends React.Component {
    state = { counter: 0 };

    componentDidMount() {
        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 });
        }, 1000);
    }

    componentDidUpdate() {
        document.title = "document updated " + this.state.counter;
    }

    render() {
        return (
            <>
                <h1>Counter is started in componentdidmount</h1>
                <p>counter: {this.state.counter}</p>
            </>
        );
    }
}

export default ClassComponent;
