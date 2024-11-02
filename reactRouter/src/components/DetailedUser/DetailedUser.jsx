import { useLoaderData,useNavigate } from "react-router-dom";
const DetailedUser = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const {name, email, phone, website} = user;
    const handleClick = () => {
        navigate(-1);
    }


    return (
        <div>
            <h2>User Details </h2>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <button onClick={handleClick}>Go Back</button>
        </div>
    );
};

export default DetailedUser;