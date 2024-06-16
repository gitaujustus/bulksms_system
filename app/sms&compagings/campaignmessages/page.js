'use client'
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'

const CampaignMessages = () => {
  const [selectedCampaign, setSelectedCampaign] = useState('Campaign ID')
  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)

  return (
    <main className='min-h-screen bg-[#D9D9D9] p-4 mt-14 md:mt-0 md:ml-80'>
      <div className='bg-white rounded-lg p-6'>
        <h1 className='font-bold text-xl mb-4 text-left'>Campaign Messages</h1>
        <div className='flex flex-col md:flex-row md:justify-around md:items-end gap-4 mb-6'>

            <div className='w-full md:w-1/4 relative'>
              <select
                value={selectedCampaign}
                onChange={(e) => setSelectedCampaign(e.target.value)}
                className='w-full py-2 pl-3 pr-10 bg-white border border-gray-500 rounded-lg'
              >
                <option>Campaign ID</option>
              </select>
              {/* <FaChevronDown className='absolute right-3 top-3 text-gray-400' /> */}
            </div>
          
            <div className='w-full md:w-1/4 relative'>
              <h3 className='text-left mx-4'>From</h3>
              <input  type='date'
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                placeholderText='dd/mm/yyyy'
                className='w-full py-2 px-2 bg-white border border-gray-500 rounded-lg'
              />
            </div>

            <div className='w-full md:w-1/4 relative'>
              <h3 className='text-left mx-4'>To</h3>
              <input type='date'
                selected={toDate}
                onChange={(date) => setToDate(date)}
                placeholderText='dd/mm/yyyy'
                className='w-full py-2 px-2 bg-white border border-gray-500 rounded-lg'
              />
            </div>
        </div>
        
          <div className='w-full py-2 mr-2 flex justify-end'>
            <button className='w-1/4 py-2 px-3 bg-red-600 text-white rounded-md shadow-sm flex items-center justify-center'>
              <FaFilter className='mr-2' />
              FILTER
            </button>
          </div>



        <div className='overflow-x-auto border border-gray-300 rounded-lg'>
          <table className='min-w-full bg-white'>
            <thead className='border-b'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ID</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Campaign ID</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Sender ID</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Phone no</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Message</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Status</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Created at</th>
              </tr>
            </thead>
            <tbody className='bg-gray-50'>
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
    </main>
  )
}

export default CampaignMessages
