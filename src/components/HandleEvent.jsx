import React from "react";
// import Button from "./Button";

function HandleEvent() {
    const [id, setId] = React.useState(0);  // neu ko viet React.useState thi phai khai bao {useState} from react

    function changeId(idTodo) {
        // setId(idTodo);
        setId(prevState => prevState + idTodo); 
    };

    console.log(id);

    return (
        <div>
            this is handle HandleEvent
            {/* <ul>
                <li>
                    Learn React
                    <Button text="Get detail" />
                </li>
                <li>
                    Learn Angular
                    <Button text="Get detail" />
                </li>
            </ul> */}

            {/* demo ben duoi */}
            <ul>
                <li style={{backgroundColor: "lightblue"}} onClick={() => changeId(1)}>Learn React</li>
                <li style={{backgroundColor: "lightgreen"}} onClick={() => changeId(2)}>Learn Angular</li>
            </ul>
        </div>
    )
};

export default HandleEvent;