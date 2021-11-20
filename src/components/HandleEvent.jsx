import React from "react";

function HandleEvent() {
    const [id, setId] = React.useState(0);  // neu ko viet React.useState thi phai khai bao {useState} from react

    function changeId(idTodo) {
        setId(idTodo);
    };

    console.log(id);

    return (
        <div>
            this is handle HandleEvent
            <ul>
                <li style={{backgroundColor: "lightblue"}} onClick={() => changeId(1)}>Learn React</li>
            </ul>
            <ul>
                <li style={{backgroundColor: "lightgreen"}} onClick={() => changeId(2)}>Learn Angular</li>
            </ul>
        </div>
    )
};

export default HandleEvent;