import React, { useState } from "react";

function State() {
    // primitive value: string, boolean, number ...
    const [firstName, setFirstName] = useState('truong');
    const [lastName] = useState('tony');
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(prevState => prevState + 1);
    };

    // note: khi update state rồi mà UI ko re-render, check lại xem state updated và old state có giống nhau ko????
    // console.log('firstname456: ', firstName)

    // reference value: array, object
    const [messageObj, setMessageObj] = useState({  // memory A
        message: '',
        id: '',
        author: {
            name: '',
            gender: ''
        }
    })

    console.log('messageObj: ', messageObj);

    return (
        <div>
            FirstName: {firstName} <br/>
            LastName: {lastName} <br/>
            
            <p>you clicked {count} times</p>
            <button type="button" onClick={increaseCount}>Click me</button>
            {/* <button type="button" onClick={() => setCount(count + 1)}>Click me</button> */}
            <hr/>
            <h3>update primitive demo</h3>
            <button type="button" onClick={() => setFirstName('truong nguyen 456')}>change first name</button>

            <br/>
            ===================
            <br/>
            <h3>State: updating object</h3>
            <input
                type="text"
                // value={messageObj.message}
                value={messageObj.author.name}      // sua lai messageObj.message & messageObj.author.name
                onChange={event => {
                    // // change mutable object 
                    // console.log('event: ', event.target.value);
                    // messageObj.message = event.target.value;    // ==>> still in memory A
                    // setMessageObj(messageObj);   // doesn't re-render;
                    // console.log('messageObj: ', messageObj);    // direct mutate object messageObj, violation the rule immutable


                    //// immutable object
                    // const newMessage = {message: event.target.value }; // memory B, BUT if there is more than property message, rest properties will be lost;    ===>>> avoid using this

                    // const newMessage = {...messageObj};  // shallow copy -> memory B // gooder:))) ===>>> can use
                    // newMessage.message = event.target.value;
                    // setMessageObj(newMessage);

                    //// callback function
                    //// dùng cách này khác c2: ko cần phải tạo 1 object mới, vì nó cũng tương tự việc tạo 1 object mới
                    //// const newMessage = { ...prevState, message: event.target.value}  *enter return newMessage;
                    // setMessageObj(prevState => {
                    //     return {        // useState là 1 object, set lại state mới cũng là 1 object, nên phải return ra object
                    //         ...prevState,
                    //         message: event.target.value      // ghi đè property message mới lên prop message cũ để change trong object
                    //     }
                    // })

                    
                    //// update nested object
                    //// wrong way 1:
                    // setMessageObj(prevState => {
                    //     return {
                    //         ...prevState,
                    //         name: event.target.value    // name ở đây nhảy vào cùng cấp với id & message, author ===>>> sai mục đích, muốn update name: trong prop author, not adding prop name cùng cấp với author
                    //     }
                    // })

                    //// wrong way 2:
                    // setMessageObj(prevState => {
                    //     return {
                    //         ...prevState.author,        // this way replace all other props in MessageObject, just left name ===>>> wrong purpose
                    //         name: event.target.value
                    //     }
                    // })

                    //// wrong way 3:
                    // setMessageObj(prevState => {
                    //     return {
                    //         ...prevState,
                    //         author: {
                    //             name: event.target.value    // lỗi như wrong way 2, nhưng ở phạm vi nhỏ hơn là trong prop author ===>>> gây mất prop gender; this is also a replace object error
                    //         }
                    //     }
                    // })

                    //// correct
                    setMessageObj(prevState => {
                        return {
                            ...prevState,   // copy shallow origin object
                            author: {
                                ...prevState.author,    // copy shallow author prop
                                name: event.target.value
                            }
                        };
                    });
                    //// muốn thay đổi thêm gender trong author có thể tạo thêm 1 input với value ObjectMess.author.gender và onchange tương tự
                }}
            />
        </div>
    )
}

export default State;