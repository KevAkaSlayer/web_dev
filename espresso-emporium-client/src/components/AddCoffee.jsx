import Swal from 'sweetalert2';


const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        console.log('Coffee Added');
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        console.log(name, quantity, photo);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                quantity,
                photo
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Coffee Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    }


    return (
        <div className='bg-[#f4f3f0] p-24 '>
            <h1 className='text-3xl font-extrabold'>Add Coffee</h1>
                <div>
                    <form onSubmit={handleAddCoffee}>
                        <div className='md:flex gap-2'>
                            <div className='w-1/2'>
                                <p>Name</p>
                                <input type="text" placeholder="Enter Name" name='name' className="input input-bordered w-full " />
                            </div>
                            <div className='w-1/2'>
                                <p>Available Quantity</p>
                                <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div>
                            <p>Photo URL</p>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-full" />
                        </div>
                        <div>
                           <input type="submit" value="Add Coffee" className='btn btn-ghost bg-black w-full mt-5 text-white'/>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default AddCoffee;