import React from 'react'
import first from "../../assets/images/1.png"
import ReuseBtns from '../Reusuablethings/ReuseBtns'
import { useLoaderData } from 'react-router'



const ViewCoffee = () => {

    const data = useLoaderData();
    // console.log("Coffee to be seen =", data);



    return (
        <>
            <ReuseBtns className="" />
            <div className="hero lg:h-[600px]">
                <div className='flex justify-center items-center bg-[#F4F3F0] w-[1320px]'>

                    <div className=''>
                        <img src={data?.photoUrl} alt="" className='w-[351px] h-[455px]' />
                    </div>
                    <div className='lg:pl-10 h-[291px] w-[308px] '>
                        <h1 className="text-5xl text-start mt-10">{data?.name}
                        </h1>
                        <p className="my-7 font-normal text-gray-700 dark:text-gray-400 text-xl">
                            <h5>
                                Name:  {data?.name}
                            </h5>
                            <h5>
                                Chef:  {data?.chef}
                            </h5>
                            <h5>
                                Supplier:  {data?.supplier}
                            </h5>
                            <h5>
                                Taste:  {data?.taste}
                            </h5>
                            <h5>
                                Category:  {data?.category}
                            </h5>
                            <h5>
                                Details:  {data?.details}
                            </h5>
                        </p>
                    </div>
                </div>
            </div>
            {/* <img src={data.photoUrl} alt={data.name} className='w-[351px] h-[455px]' />

            <h5>Name: {data.name}</h5>
            <h5>Chef: {data.chef}</h5>
            <h5>Supplier: {data.supplier}</h5>
            <h5>Taste: {data.taste}</h5>
            <h5>Category: {data.category}</h5>
            <h5>Details: {data.details}</h5> */}

        </>
    )
}

export default ViewCoffee