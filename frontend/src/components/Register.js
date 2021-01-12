import React, {useState} from 'react';

const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const formHandler = (event) => {

        console.log(name)
        console.log(email)
        console.log(password)
        event.preventDefault();

    }

    return (
        <div>
            Register page
            <form onSubmit={formHandler}>
                <label>name</label>
                <input type="text" name="userName" onChange={(e) => setName(e.target.value)}/>
                <label>name</label>
                <input type="email" name="userEmail" onChange={(e) => setEmail(e.target.value)}/>
                <label>password</label>
                <input type="password" name="userPassword" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Register
