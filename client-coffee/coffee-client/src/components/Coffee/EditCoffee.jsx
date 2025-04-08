import React from 'react'
import { useLoaderData } from 'react-router'

const EditCoffee = () => {


    const data = useLoaderData();
    // console.log("DAta =", data?._id);

    const handleEditForm = (e) => {
        e.preventDefault();

        console.log("Edit form ");
        const editedData = {
            name: e.target.name.value,
            chef: e.target.chef.value,
            supplier: e.target.supplier.value,
            taste: e.target.taste.value,
            category: e.target.category.value,
            details: e.target.details.value,
            photoUrl: e.target.photoUrl.value,
        }
        console.log("Edited Data - ", editedData);

        const url = `http://localhost:5000/edit/${data._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(editedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("DAta =", data);
                if (data) {
                    alert("Edited!!");
                }
            })

    }

    return (
        <>
            <p className='text-5xl text-center'>Name : {data?.name}</p>
            <form onSubmit={handleEditForm} className="mx-auto bg-[#F4F3F0]  max-w-[1220px] w-full h-[778px]">
                <div className='flex flex-col items-center'>
                    <h1 className='lg:mt-4 text-center text-2xl my-4'>Edit your coffee</h1>
                    <p className='w-[932px] text-center text-xl text-[#1B1A1A]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className=' py-2 flex flex-col place-items-center '>

                    <div className="grid md:grid-cols-2 md:gap-6 w-[1096px] mt-10">
                        <div className="relative z-0 mb-5 group w-[536px] h-[64px]">
                            <input
                                type="text"
                                name="name"
                                defaultValue={data?.name}
                                id="floating_name"

                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group ">
                            <input
                                type="text"
                                name="chef"
                                defaultValue={data?.chef}
                                id="floating_chef"

                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_chef" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Chef</label>
                        </div>
                        <div className="relative z-0 mb-5 group w-[536px] h-[64px]">
                            <input
                                type="text"
                                name="supplier"
                                defaultValue={data?.supplier}
                                id="floating_supplier"

                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_supplier" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Supplier</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="taste"
                                defaultValue={data?.taste}
                                id="floating_taste"

                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_taste" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Taste</label>
                        </div>
                        <div className="relative z-0 w-[536px] h-[64px] mb-5 group">
                            <input
                                type="text"
                                name="category"
                                defaultValue={data?.category}
                                id="floating_category"

                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="details"
                                defaultValue={data?.details}
                                id="floating_details"

                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />


                            <label for="floating_details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-[1096px] h-[64px] mt-10 mb-5 group ">
                        <input
                            type="photo"
                            name="photoUrl"
                            defaultValue={data?.photoUrl}
                            id="floating_photo-url"

                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                        />

                        <label for="floating_photo-url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo Url</label>

                    </div>
                    <button
                        type="submit"
                        className="cursor-pointer bg-[#D2B48C] mt-10  font-medium rounded-lg text-sm w-[1096px] px-5 py-2.5 text-center text-[#331A15] border-2 border-[#331A15]"
                    >
                        Edit Coffee
                    </button>

                </div>
            </form>
        </>
    )

}

export default EditCoffee