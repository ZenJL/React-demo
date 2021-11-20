import React from "react";

function CommentDescription(props) {       // hoac destructuring thang vao (props) = ({date});
    const {description} = props;
    return (
        <div>
            {description}
        </div>
    );
};

export default CommentDescription;