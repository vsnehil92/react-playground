import React, { useState } from "react";

const FunctionComponent = () => {
    const [counter, setCount] = useState(0);

    return (
        <>
            <h1>this is a functional component</h1>
            <br />
            <p>counter: {counter}</p>
            <button
                onClick={() => {
                    setCount(counter + 1);
                }}
            >
                Click Me
            </button>
        </>
    );
};

export default FunctionComponent;
