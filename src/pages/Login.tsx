import React, { useState } from "react";

const Login = () => {
    const [value, setValue] = useState({userid: "", userpassword: ""});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const copy = Object.assign(value);
        copy[event.target.name] = event.target.value;
        setValue(copy);
    }
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="id" >이름 : </label>
            <input type="text" id="id" name="userid" value={value.userid} onChange={handleChange}  placeholder="계정명"/>
            <label htmlFor="password">비밀번호 : </label>
            <input type="password" id="password" name="userpassword" value={value.userpassword} onChange={handleChange}  placeholder="비밀번호"/>
            <input type="submit" value="Login"/>
        </form>
    );
}

export default Login;