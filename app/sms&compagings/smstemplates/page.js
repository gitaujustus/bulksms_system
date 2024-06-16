import React from 'react'

function smsTemplates() {
  return (
    <main className='min-h-screen bg-[#D9D9D9] px-3 py-10 mt-14 md:mt-0 md:ml-80'>
        <div className=' bg-white rounded-lg p-4'>
           <div className='flex justify-between'>
           <h1 className='font-semibold text-lg md:text-xl'>
                SMS Templates
            </h1>
            <button className='flex bg-[#BC3333] rounded-md py-1 px-2 text-white font-semibold'>
                <span>
                <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 16.2476H16.25V23.7476H13.75V16.2476H6.25V13.7476H13.75V6.24756H16.25V13.7476H23.75V16.2476Z" fill="white"/>
                </svg>

                </span>
                ADD NEW
            </button>
           </div>
           <div className='border border-black my-2 '>
                    <button className='float-end p-3 flex items-center gap-2 text-[#BC3333] font-bold'>
                        <span>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 15L3.75 8.75L5.5 6.9375L8.75 10.1875V0H11.25V10.1875L14.5 6.9375L16.25 8.75L10 15ZM2.5 20C1.8125 20 1.22417 19.7554 0.735 19.2662C0.245833 18.7771 0.000833333 18.1883 0 17.5V13.75H2.5V17.5H17.5V13.75H20V17.5C20 18.1875 19.7554 18.7762 19.2663 19.2662C18.7771 19.7562 18.1883 20.0008 17.5 20H2.5Z" fill="#BC3333"/>
                            </svg>
                        </span>
                        EXPORT
                    </button>
                <table className='w-full h-full min-h-[60vh]  bg-white'>
                    <thead className='h-16'>
                        <tr className=''>
                            <th >ID</th>
                            <th>Name</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#D9D9D9]'>
                        <tr>
                          <td colSpan={3} className="text-center">No rows</td>
                        </tr>
                    </tbody>
                </table>
           </div>
        </div>
    </main>
  )
}

export default smsTemplates