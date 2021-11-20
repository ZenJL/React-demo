import React from "react";

const Text = (props) => {
    const {description, color} = props;
    // const textColor = {
    //     color: {color}
    // };

    return (
        <div style={{color: color}}>{description}</div>
    );
};

export default Text;