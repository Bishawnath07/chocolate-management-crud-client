import Swal from "sweetalert2";


const AddChocolet = () => {

    const handleChocolet =event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const chocoletInfo = {name , country, category}
        console.log(chocoletInfo)

        fetch('http://localhost:5000/chocolets' , {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(chocoletInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                form.reset()
                Swal.fire({
                    title: 'Success',
                    text: 'Chocolet Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })




    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center my-10">Add a Chocolet</h2>
            <form onSubmit={handleChocolet}>
                {/* form name and quantity row */}
                <div className=" mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Chocolet Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Chocolet Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* form supplier row */}
                <div className=" mb-8">
                  
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country" placeholder="Enter country name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* form Photo url row */}
                
                <input type="submit" value="Add Coffee" className="btn btn-block " />

            </form>
        </div>
    );
};

export default AddChocolet;