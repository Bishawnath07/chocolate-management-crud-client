import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ChocoletCard = ({ chocolet , chocolets , setChocolets }) => {
    const { _id ,name, country, category } = chocolet;

    const deleteChocolet = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/chocolets/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            console.log('delete confirmed')
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = chocolets.filter(cof => cof._id !== _id);
                            setChocolets(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Chocolet name : {name}</h2>
                <p>Country: {country}</p>
                <p>Category: {category}</p>
                <div className="card-actions justify-end">
                   <Link to = {`updateChocolet/${_id}`}> <button className="btn btn-primary">edit</button></Link>
                    <button onClick={()=> deleteChocolet(_id)} className="btn ">X</button>
                </div>
            </div>
        </div>
    );
};

export default ChocoletCard;