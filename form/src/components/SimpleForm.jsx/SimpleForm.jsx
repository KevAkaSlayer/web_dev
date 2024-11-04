const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;