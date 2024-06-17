import React from 'react';
import { FaPlay } from "react-icons/fa";

const RequestSenderID = () => {
  return (
    <section className=" mt-14 md:mt-0 md:ml-80">
        <h2 className="text-lg font-semibold my-2 mx-4 text-left">Request for Sender ID</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mx-4">
        <div className="flex flex-col gap-11 md:gap-4 justify-start md:flex-row md:justify-center md:items-center my-6">

            <div className="mx-1 flex items-center">
            <div className="bg-gray-400 rounded-full p-2">1</div>
            <p className='text-sm mx-2'>Choose Sender ID</p>
            </div>

            <hr className='transform rotate-90 md:transform-none border-gray-400 border-[1px] w-1/6' />

            <div className="mx-1 flex items-center">
            <div className="bg-gray-400 rounded-full p-2">2</div>
            <p className='text-sm mx-2'>Upload documents</p>
            </div>

            <hr className='transform rotate-90 md:transform-none border-gray-400 border-[1px] w-1/6' />

            <div className="mx-1 flex items-center">
            <div className="bg-gray-400 rounded-full p-2">3</div>
            <p className='text-sm mx-2'>Confirm application</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row my-3 gap-6 justify-center">
            <div className="my-2 md:w-1/4">
            <input
                className="w-full border border-gray-400 rounded-md p-2"
                type="text"
                placeholder="Sender ID"
            />
            </div>
            <div className="my-2 md:w-3/4">
            <input
                className="w-full border border-gray-400 rounded-md p-2"
                type="text"
                placeholder="Purpose"
            />
            </div>
        </div>
        <div className="text-right flex justify-end ">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <FaPlay size={15} />
            NEXT
            </button>
        </div>
        </div>
    </section>
  );
};

export default RequestSenderID;