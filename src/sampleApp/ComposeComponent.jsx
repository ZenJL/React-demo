// shorthand: rfce
import React from "react";

// import CommentDate from "./CommentDate";
// import CommentDescription from "./CommentDescription";
// import CommentUserinfo from "./CommentUserinfo";
import Comment from "./Comment";


function ComposeComponent() {
    const comment = {
        date: '05/16/2021',
        text: 'I hope u enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64',
        },
    };

    return (
        <div>
            {/* <CommentUserinfo name={comment.author.name} avatarUrl={comment.author.avatarUrl} />
            <CommentDescription description={comment.text} />
            <CommentDate date={comment.date} /> */}

            <Comment author={comment.author} text={comment.text} date={comment.date} />
        </div>
    );
};

export default ComposeComponent;