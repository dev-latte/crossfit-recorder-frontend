import React, { useState } from "react";

const SignUp = () => {
    const [value, setValue] = useState({email: "", password: "", name: "", confirmPassword: ""});

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
                <label htmlFor="email" >이메일 : </label>
                <input type="text" id="email" name="email" onChange={handleChange} placeholder="이메일 주소"/>
                <label htmlFor="name" >이름 : </label>
                <input type="text" id="name" name="name" onChange={handleChange} placeholder="이름"/>
                <label htmlFor="password">비밀번호 : </label>
                <input type="password" id="password" name="password" onChange={handleChange}  placeholder="비밀번호"/>
                <label htmlFor="confirm-password">비밀번호 확인 : </label>
                <input type="password" id="confirm-password" name="confirmPassword" onChange={handleChange}  placeholder="비밀번호 확인"/>
                <input type="submit" value="Login"/>
            </form>
    );
}

export default SignUp;