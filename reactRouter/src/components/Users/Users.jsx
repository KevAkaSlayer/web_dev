import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate(`/users/$(id)`);
    // } 
    return (
        <div>
            <h2>Our Users : {users.length}</h2>

            <div >
                {
                    users.map((user) => (
                        <div key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <Link to={`/users/${user.id}`}>View Details</Link>
                            {/* <button onClick={()=>handleClick(user.id)}>details</button> */}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Users;