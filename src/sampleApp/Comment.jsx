import React from "react";
import CommentDate from "./CommentDate";
import CommentDescription from "./CommentDescription";
import CommentUserinfo from "./CommentUserinfo";


function Comment({author, text, date}) {
    return (
        <div>
            <CommentUserinfo name={author.name} avatarUrl={author.avatarUrl} />
            <CommentDescription description={text} />
            <CommentDate date={date} />

        </div>
    );
};

export default Comment;