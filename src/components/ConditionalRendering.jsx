import React, { useEffect, useState, Fragment } from "react";
import {v4 as uuidv4} from 'uuid';
import Button from "./Button";

// css
import styles from "./conditionalRendering.module.css"
import clsx from "clsx"

const defaultTodo = [       // vi dau dai dien cho data server trả về, đang giả lập api ở đây
    {
        title: 'cars'
    },
    {
        title: 'human'
    },
];

function ConditionalRendering() {
    //// day chi la demo mau, thuc te, mang array do server tra ve, co the co hoac ko co id trong do
    // const todos = [
    //     {
    //         id: 1,
    //         title: 'cars'
    //     },
    //     {
    //         id: 2,
    //         title: 'human'
    //     }
    // ];
    //// render 2obj {id:1... } va {id:2...}. khi react render ra, ca 2 obj deu dc react tu dinh nghia chung 1 unique key, vi du la id: abc (tuc la moi obj se co key la id: abc ===> trung key nhau)
    //// nhung vi 2 obj la 2 list khac nhau, phai tim cach dinh nghia key cho 2 obj nay co 2 unique key rieng biet,===>>> de react biet la 2 obj nay la 2 item rieng biet khac nhau, de change cho dung note

    // neu render ra list item ngoai UI cho user CHI XEM (ONLY WATCH), thi co the dung index


    // const [todos, setTodos] = useState([
    //     {
    //         title: 'cars'
    //     },
    //     {
    //         title: 'human'
    //     }
    // ]);      //// create state
    const [todos, setTodos] = useState([]);      //// create state rong buoc dau, de ko render ra UI, khi chua co id, doi sau khi run useEffect co id thi setState lại render ra UI
    const [count, setCount] = useState(1);
    const [isAuth, setIsAuth] = useState(false);
    let button = null;

    //// sau khi react render XONG 1ST (components mounted), moi chay useEffect
    useEffect(() => {
        console.log('useEffect run here3')
        //// thay vi default.map() o day (demo), thi thuc te co the dung fetch api -> tra ve 1 defaultTodos rồi thao tác tiếp
        // e.g: const defaultTodo = await / fetch (....)
        const newTodos = defaultTodo.map(item => {  // chạy useEffect ra mảng mới có id và setState lại mảng đó
            return {
                title: item.title,
                id: uuidv4()
            }
        })
        console.log('new222: ', newTodos)
        setTodos(newTodos);
    }, [])  // only run when first render  
    // giá trị [] ở useEffect này chỉ run first lần đầu tiên, 1 lần sau khi component đã đc mounted

    console.log('todo: ', todos)

    function handleLogical() {
        setCount(null);
    };

    // biến trong react có thể là 1 react component luôn;
    // component react đã là 1 function, nên có thể viết như dưới để thực thi luôn, ko cần tạo function khác phải gọi mới thực thi đc
    if(isAuth) {
        button = <Button text="user logined" />
    } else {
        button = <Button text="user must login" />
    }

    function renderItems() {
        const items = [1,2,3];
        return (
            // fragment này sẽ ko show ra DOM cũng như UI, trường hợp này chỉ return ra list ds 3 item, dùng khi thấy div đang dùng dư thừa và ko cần phải show ra UI
            // <>
            //     {items.map(ele => (
            //         < key={ele}>this is item: {ele}</>  // nếu ko có div hay tag gì đó, ko thể thêm key, đây là lúc fragment go on
            //     ))}
            // </>

            //// sự # giữa fragment và <></> là fragment có thể đc thêm key, dù ko cần phải xài 1 tag cụ thể khác

            <div>
                {items.map(ele => (
                    <Fragment key={ele}>this is item: {ele}</Fragment>
                ))}
            </div>
        )
    }

    return (
        <div>
            <h4>inline if with logical && operator</h4>
            {todos.length > 0 && todos.map((todo) => {
                console.log('todo what: ', todo);
                return (
                    //// truong hop co the modify ds list item, dung unique id = library uuid, de tao unique key trong child cua mang array do
                    <div key={todo.id}>
                        this is: {todo.title}
                    </div>


                    //// truong hop only watch (list ds tinh~ chi de user xem)
                    // <div key={index}>
                    //     this is: {todo.title}
                    // </div>

                    //// truong hop co san id
                    // <div key={todo.id}>
                    //     this is: {todo.title}
                    // </div>
                );
            })}

            <hr/>
            <h4>inline If with logical || operator</h4>
            {count || <div>this is logical || operator</div>}
            <br/>
            <Button text="click me" onClick={handleLogical} />
            
            <hr/>
            <h4
                className={clsx(
                    'defaultCommon',
                    isAuth ? 'auth' : 'notAuth',
                    isAuth && 'welcomeTo'
                )}
            >
                inline If-Else with ? :
            </h4>
            {/* null trong react sẽ ko render gì ra ngoài UI */}
            {isAuth ? 'logined' : 'not login'}  
            <Button text={isAuth ? 'Logined' : 'Please login'} onClick={() => setIsAuth(prevState => !prevState)} />
            {/* toggle chỉ apply đc true, false */}

            <hr/>
            <h4 className={styles.demo2}>Element variable</h4>
            {button}

            <hr/>
            <h4>Render with function</h4>
            {renderItems()}
        </div>
    );
};

export default ConditionalRendering;