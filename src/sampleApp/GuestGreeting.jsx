import React, {useState} from "react";
import Button from "../components/Button";

function WelcomeText(props) {
    const {text} = props;
    return (
        <>
            {text}
        </>
    )
};

function GuestGreeting() {
    // initial state
    const [isAuth, setIsAuth] = useState(false)
    return (
        <div>
            
            <WelcomeText text={isAuth ? 'Welcome to Tony' : 'Please Login'} />
            <br/>
            <Button text={isAuth ? 'Logout' : 'Login'} onClick={() => setIsAuth(prevState => !prevState)} />
        </div>
    );
};

export default GuestGreeting;