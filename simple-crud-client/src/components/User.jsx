
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const users = useLoaderData();
    const [user, setUser] = useState(users);


    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('User deleted successfully');
                setUser(user.filter(user => user._id !== id))
            }
        })      
    }

    return (
        <div>
            <h1>Users</h1>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => (
                        <div key={user._id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <Link to={`/update/${user._id}`}><button>update</button></Link>
                            <button onClick={()=>handleDelete(user._id)}>x</button>
                        </div>
                    ))
                }

            </div>


        </div>
        
    );
};

export default User;