import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import Swal from "sweetalert2";


const Users = () => {


    const users = useLoaderData();


    const [user, setUser] = useState(users);
    // console.log(users);

    const handleDel = id => {
        // e.preventDefault();

        console.log("Del Triggered");

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const url = `http://localhost:5000/delete-user/${id}`
                fetch(url, {
                    method: "Delete",
                })
                    .then(res => res.json)
                    .then(data => {
                        console.log("Data deleted", data);
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remUser = user?.filter(eachUser => eachUser._id !== id)
                        // console.log("remCoffees length", remCoffees);
                        setUser(remUser);
                    })
                console.log("Delete confirmed");
            }
        });

    }


    return (
        <div className='px-25 text-3xl py-4'>
            <p className='py-4'>Users : {user?.length}</p>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table text-2xl">
                    {/* head */}


                    <thead className='text-xl'>
                        <tr>
                            {/* <th></th> */}
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Craeted At</th>
                            <th>Last loggedin At</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user && user.length > 0 && user.map((u, index) =>

                                <tr >
                                    <td>{u?._id}</td>
                                    <td>{u?.name}</td>
                                    <td>{u?.email}</td>
                                    <td>{u?.bdTime}</td>
                                    <td>{u?.lastSignInTime}</td>
                                    <td>
                                        <button onClick={() => handleDel(u?._id)} className='btn bg-[red] mr-3'>X</button>
                                        <Link to={`/edit-user/${u?._id}`}>
                                            <button className='btn bg-[black]'>✏️</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
