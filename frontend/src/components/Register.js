import React, {useState} from 'react';
import axios from 'axios';

const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [backendResponse, setBackendResponse] = useState("");

    const formHandler = async (event) => {
        
        event.preventDefault();
        // nb.  proxy in package-json sets the local host
        
        console.log(name)
        console.log(email)
        console.log(password)

        const body = {
            userName: name,
            userEmail: email,
            userPassword: password,

        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
            }

        const response = await axios.post('/register', body, config);
        console.log(response)

        setBackendResponse(response.data.message)


        
        

    }

    return (
        <div>
            Register page
            <form onSubmit={formHandler}>
                <label>name</label>
                <input type="text" name="userName" onChange={(e) => setName(e.target.value)}/><br/>
                <label>name</label>
                <input type="email" name="userEmail" onChange={(e) => setEmail(e.target.value)}/><br/>
                <label>password</label>
                <input type="password" name="userPassword" onChange={(e) => setPassword(e.target.value)}/><br/>
                <button type="submit">submit</button>
            </form>
            {backendResponse}
        </div>
    )
}

export default Register
