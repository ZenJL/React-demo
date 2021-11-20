import React from "react";
import Avatar from "./CommentAvatar";

// function Avatar({avatarUrl}) {
//     return (
//         <img src={avatarUrl} alt="" />
//     )
// };

function CommentUserinfo({name, avatarUrl}) {
    return (
        <div>
            <Avatar avatarUrl={avatarUrl} />
            <br/>
            <h5>{name}</h5>
        </div>
    );
};

export default CommentUserinfo;