import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState([]);

    const fetchData = async () => {

        // n.b. proxy in package-json sets the url root as localhost
        const response = await axios.get('/api/users');
      
        console.log(Array.isArray(response.data.users))
        console.log(response.data.users)
        let placeholder = users;
        placeholder.concat(response.data.users)
        console.log(placeholder)
        setUsers(placeholder)
        
        console.log(Array.isArray(users))
        console.log(users)

    }

    useEffect( () => {
        fetchData();
    }, [])


    return (
        <div>
           <h1>All Users</h1>

           <p>{users}</p> 

        </div>
    )
}

export default Users
