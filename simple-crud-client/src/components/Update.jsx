import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedData = useLoaderData();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);


        fetch(`http://localhost:5000/users/${loadedData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('User updated successfully');
                }
            })
    }


    return (
        <div>
            <h3>Update information of {loadedData?.name}</h3>
            <form onSubmit={handleUpdate} >
                <input type="text" name="name" defaultValue={loadedData?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedData?.email} id="" />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;