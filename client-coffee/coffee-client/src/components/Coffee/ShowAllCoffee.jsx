import React, { useEffect, useState } from "react";
import first from "../../assets/images/1.png";
import nodata from "../../assets/images/nodata.gif";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate, Link } from "react-router";
import Swal from "sweetalert2";

const ShowAllCoffee = () => {
    const navigate = useNavigate();

    const [coffees, setCoffees] = useState([]);

    // const handleViewCoffee = (id) => {
    //     // e.preventDefault();

    //     navigate("/view-coffee");
    // };

    const handleDelete = (id) => {
        console.log("Clicked ", id);


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

                const url = `http://localhost:5000/delete/${id}`
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
                        const remCoffees = coffees?.filter(eachCoffee => eachCoffee._id !== id)
                        // console.log("remCoffees length", remCoffees);
                        setCoffees(remCoffees);
                    })
                console.log("Delete confirmed");
            }
        });

    }
    console.log(coffees.length);

    const url = "http://localhost:5000/coffees";

    useEffect(() => {
        fetch(url, {
            method: "GET",
            // headers: {
            //     "content-type": "application/json",
            // },
            // body: JSON.stringify(coffee)
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log("Data fetched from server:", data);
                if (data) {
                    setCoffees(data);
                } else {
                    console.error("No data found");
                }
            });
    }, []);
    // console.log("coffees ", coffees);
    // console.log("coffee Url ", coffees.photoUrl);
    return (
        <>
            {coffees.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-[20%]">
                    {coffees.map((coffee, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row gap-2 justify-center items-center"
                        >
                            <div className="flex flex-col items-center rounded-lg shadow-sm md:flex-row md:max-w-xl bg-[#F5F4F1]">
                                <img
                                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-50 md:rounded-none md:rounded-s-lg"
                                    src={coffee.photoUrl}
                                    alt={coffee.name}
                                />

                                <div className="flex gap-5 justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                                    <p className="my-7 font-normal text-gray-700 dark:text-gray-400 text-xl">
                                        <h5>Name: {coffee.name}</h5>
                                        <h5>Chef: {coffee.chef}</h5>
                                        <h5>Price: 890 Taka</h5>
                                    </p>
                                    <div className="flex flex-col">
                                        <Link to={`view-coffee/${coffee._id}`}>
                                            <button
                                                // onClick={handleViewCoffee}
                                                className="btn btn-primary mb-2 bg-[#D2B48C]"
                                            >
                                                <FaEye size={15} />
                                            </button>
                                        </Link>

                                        <Link to={`edit/${coffee._id}`}>
                                            <button className="btn btn-primary mb-2 bg-[#3C393B]">
                                                <FaPen size={15} />
                                            </button>
                                        </Link>

                                        <button onClick={() => handleDelete(coffee?._id)} className="btn btn-primary bg-[#EA4744]">
                                            <MdDelete size={20} />
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div >) : (
                <div className="w-full flex justify-center items-center">
                    <p className=" text-4xl">No Coffee found</p>
                </div>
            )
            }

        </>
    );
};

export default ShowAllCoffee;
