import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChocolet = () => {
    const chocolet = useLoaderData();
    console.log(chocolet)
    const {_id ,  name , country , category} = chocolet;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
         const category = form.category.value;
       

        const updatedChocolet = { name, country , category}

        console.log(updatedChocolet);

        // send data to the server
        fetch(`http://localhost:5000/chocolets/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedChocolet)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Chocolet Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-center my-10">Update Chocolet:{name}</h2>
        <form onSubmit={handleUpdateCoffee}>
            {/* form name and quantity row */}
            <div className=" mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Chocolet Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Chocolet Name" className="input input-bordered w-full" />
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
                        <input type="text" name="country" defaultValue={country} placeholder="Enter country name" className="input input-bordered w-full" />
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
                        <input type="text" name="category" defaultValue = {category} placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            {/* form Photo url row */}
            
            <input type="submit" value="Update chocolet" className="btn btn-block " />

        </form>
    </div>
    );
};

export default UpdateChocolet;