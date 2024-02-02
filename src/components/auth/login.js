import { useState } from "react";
import loginData from "../mock data/loginMock.json";

export const LoginPage = () => {
    const [fetchInput, setFetchInput] = useState({
        email: "",
        password: ""
    });

    const onChangeInputHandler = (e) => {
        setFetchInput({
            ...fetchInput,
            [e.target.name]: e.target.value
        })
    };
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const user = loginData.find((user) => user.email === fetchInput.email && user.password === fetchInput.password)
        if(user){
            console.log("Successfully Login");
        }else{
            console.log("Failed to Login");
            // setLoginError("Invalid email or password");

        }
        setFetchInput({
            email: '',
            password: ''
        });
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div>
                <div>
                    <label>Email</label>
                    <input type="text" value={fetchInput.email} onChange={onChangeInputHandler} name="email"/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" value={fetchInput.password} onChange={onChangeInputHandler} name="password"/>
                </div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}