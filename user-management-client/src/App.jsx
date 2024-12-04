
import { useEffect } from 'react';
import './App.css'
import { useState } from 'react'
function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])


  return (
    <>
      <h1>User Management System</h1>
      <h3>Numbers of Users : {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' id=""/>
        <br/>
        <input type="text" name='name' id=""/>
        <input type="submit" value="Add User"/>

      </form>


      <div>
        {
          users.map(user => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))
        }


      </div>
    </>
  )
}

export default App
