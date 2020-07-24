import React from "react";

const FunctionComponent = (props) => {
    console.log("functional task added");
    return <div>{props.title}</div>;
};

export default React.memo(FunctionComponent);
