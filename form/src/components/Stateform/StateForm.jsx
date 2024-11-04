import  { useState } from 'react';

const StateForm = () => {
    const [email, setEmail] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(email);
    }

    return (
        <form onSubmit={handleSubmit}>
             <input type="text" />
                <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <br />
             <button>Submit</button>
        </form>
    );
};

export default StateForm;