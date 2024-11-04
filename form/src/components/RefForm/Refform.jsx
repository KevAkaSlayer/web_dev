import { useEffect, useRef } from "react";

const Refform = () => {
    const nameRef = useRef();  

    useEffect(()=>{
        nameRef.current.focus();
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" name="name" />
            <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <button>Submit</button>
        </form>
    );
};

export default Refform;