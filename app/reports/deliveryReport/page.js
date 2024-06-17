"use client"
import React from 'react';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
const DeliveryReport = () => {

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');


    return ( 
        <section className=" mt-14 md:mt-0 md:ml-80"> 
            {/* First box */}
            <div className="bg-white m-2 rounded-md">
                <h1 className="text-left mx-2 font-bold">User delivery reports</h1>

                {/* Date picker div */}
                <div className='flex flex-wrap justify-center'>
                    {/* from date picker div */}
                    <div className='flex flex-col items-start gap-1 m-4 w-[80%] md:w-[45%]'>
                        <h3>From</h3>
                        <input type="date" 
                        value={fromDate} 
                        onChange={(e) => setFromDate(e.target.value)} 
                        placeholder="dd/mm/yyyy"
                        className=' w-full py-2 px-2 bg-white border border-gray-500 rounded-lg'
                        />
                    </div>

                    {/* To date picker div */}
                    <div className='flex flex-col items-start gap-1 m-4 w-[80%] md:w-[45%]'>
                        <h3>To</h3>
                        <input type="date" 
                        value={toDate} 
                        onChange={(e) => setToDate(e.target.value)} 
                        placeholder="dd/mm/yyyy"
                        className='w-full py-2 px-2 bg-white border border-gray-500 rounded-lg'
                        />
                    </div>
                </div>

                {/* Filter days presets */}
                <div className='flex flex-wrap justify-center'>
                    <button className='border border-gray-500 text-black p-2 rounded-full m-2 text-sm'>Today</button>
                    <button className='border border-gray-500 text-black p-2 rounded-full m-2 text-sm'>Yesterday</button>
                    <button className='border border-gray-500 text-black p-2 rounded-full m-2 text-sm'>Last 7 days</button>
                    <button className='border border-gray-500 text-black p-2 rounded-full m-2 text-sm'>This week</button>
                    <button className='border border-gray-500 text-black p-2 rounded-full m-2 text-sm'>Last 30 days</button>
                    <button className='border border-gray-500 text-black p-2 rounded-full m-2 text-sm'>Last month</button>
                    <button className='border border-gray-500 text-black p-2 rounded-full m-2 text-sm'>Last month</button>
                </div>

                {/* Generate report button */}
                <button className='bg-hillganred text-white font-bold my-4 p-2 rounded-lg m-2 text-sm w-3/4'>GENERATE REPORT</button>
            </div>

            {/* Second box */}
            <div className="bg-white m-2 rounded-md">
                {/* Density and Export buttons to the right */}
                <div className='flex flex-wrap justify-end'>
                    <button className='text-hillganred font-bold my-4 p-2 rounded-lg m-2 text-sm'>
                        <span className='flex items-center gap-1'><IoMenu size={18} /> DENSITY</span>
                    </button>
                    <button className='text-hillganred font-bold my-4 p-2 rounded-lg m-2 text-sm'>
                        <span className='flex items-center gap-1'><MdOutlineFileDownload size={18} /> EXPORT</span>
                    </button>
                </div>

                {/* Table */}
                <div className='overflow-x-auto border border-gray-300 rounded-lg'>
          <table className='min-w-full bg-white'>
            <thead className='border-b'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Submitted</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Delivered</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Not DeliveredD</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Rejected</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Total</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Date</th>
              </tr>
            </thead>
            <tbody className='bg-gray-300'>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'></td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'></td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'></td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'></td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>No rows</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'></td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'></td>
              </tr>
            </tbody>
          </table>
          <div className='flex items-center justify-between p-4'>
            <div className='text-sm text-gray-600'>0-0 of 0</div>
            <div className='flex space-x-2'>
              <button className='text-sm text-gray-600'>◄</button>
              <button className='text-sm text-gray-600'>►</button>
            </div>
          </div>
        </div>
            </div>

            
        </section>
     );
}
 
export default DeliveryReport;