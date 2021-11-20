import React from "react";

function CommentDate(props) {       // hoac destructuring thang vao (props) = ({date});
    const {date} = props;
    return (
        <div>
            {date}
        </div>
    );
};

export default CommentDate;