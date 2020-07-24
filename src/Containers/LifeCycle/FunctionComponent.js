import React, { useState, useEffect } from "react";

const FunctionComponent = () => {
    const [counter, setCount] = useState(0);

    useEffect(() => {
        console.log("used both as component did mount and component did update")
        let id = setInterval(() => {
            setCount(counter + 1);
        }, 1000);
        return () => clearInterval(id);
    }, [counter]);

    return (
        <>
            <h1>this is a functional component</h1>
            <br />
            <p>counter: {counter}</p>
        </>
    );
};

export default FunctionComponent;
