import React from "react";
import Button from "../components/Button";
import Input from "./Input";
import Text from "./Text";

function ReactBoxes() {
    function AlertReactBoxes() {
        alert('Hello to React from React!');
    };

    return (
        <div>
            <Text description="Demo ReactBoxes" color="red" />
            <Input type="text" placeholder="Enter Somthing Here" />
            <Button text="Submit" type="submit" onClick={AlertReactBoxes} />
        </div>
    );
};

export default ReactBoxes;