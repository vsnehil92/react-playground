import React from "react";

class ClassComponent extends React.Component {
    state = { counter: 0 };
    render() {
        return (
            <>
                <h1>this is a class component</h1>
                <p>counter: {this.state.counter}</p>
                <button
                    onClick={() => {
                        this.setState({ counter: this.state.counter + 1 });
                    }}
                >
                    Click Me
                </button>
            </>
        );
    }
}

export default ClassComponent;
