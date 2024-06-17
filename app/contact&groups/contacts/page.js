import React from 'react'

function Contacts() {
  return (
    <main className='bg-[#D9D9D9] min-h-screen p-3 mt-14 md:mt-0 md:ml-80'>
      <div className='bg-white  w-full p-3 border border-black  rounded-md'>
        <h1 className='text-left text-xl md:text-2xl my-5'>Contacts</h1>
            <div className='flex justify-between'>
                <p className='flex items-center font-semibold gap-2 text-[#BC3333]'>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0001 12V19.88C14.0401 20.18 13.9401 20.5 13.7101 20.71C13.6176 20.8027 13.5077 20.8762 13.3868 20.9264C13.2658 20.9766 13.1361 21.0024 13.0051 21.0024C12.8742 21.0024 12.7445 20.9766 12.6235 20.9264C12.5025 20.8762 12.3926 20.8027 12.3001 20.71L10.2901 18.7C10.1811 18.5933 10.0982 18.4629 10.0479 18.319C9.99763 18.175 9.98127 18.0213 10.0001 17.87V12H9.97013L4.21013 4.62C4.04774 4.41153 3.97446 4.14726 4.00632 3.88493C4.03817 3.6226 4.17257 3.38355 4.38013 3.22C4.57013 3.08 4.78013 3 5.00013 3H19.0001C19.2201 3 19.4301 3.08 19.6201 3.22C19.8277 3.38355 19.9621 3.6226 19.9939 3.88493C20.0258 4.14726 19.9525 4.41153 19.7901 4.62L14.0301 12H14.0001Z" fill="#BC3333"/>
                        </svg>
                    </span>
                    ADVANCED FILTERS
                </p>
                <button className='px-6 text-white bg-[#BC3333] font-semibold rounded-lg py-2'>FILTER</button>
            </div>
        <div className='border border-black my-2 overflow-x-auto rounded-lg '>
              <button className='float-end my-4 p-3 flex items-center gap-2 text-[#BC3333] font-bold'>
                <span>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15L3.75 8.75L5.5 6.9375L8.75 10.1875V0H11.25V10.1875L14.5 6.9375L16.25 8.75L10 15ZM2.5 20C1.8125 20 1.22417 19.7554 0.735 19.2662C0.245833 18.7771 0.000833333 18.1883 0 17.5V13.75H2.5V17.5H17.5V13.75H20V17.5C20 18.1875 19.7554 18.7762 19.2663 19.2662C18.7771 19.7562 18.1883 20.0008 17.5 20H2.5Z" fill="#BC3333"/>
                  </svg>
                </span>
                EXPORT
              </button>
              <button className='float-end my-4 p-3 flex items-center gap-2 text-[#BC3333] font-bold'>
                <span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.535714 3.86719H14.4643C14.7602 3.86719 15 3.65733 15 3.39844V2.22656C15 1.96767 14.7602 1.75781 14.4643 1.75781H0.535714C0.239833 1.75781 0 1.96767 0 2.22656V3.39844C0 3.65733 0.239833 3.86719 0.535714 3.86719ZM0.535714 8.55469H14.4643C14.7602 8.55469 15 8.34483 15 8.08594V6.91406C15 6.65517 14.7602 6.44531 14.4643 6.44531H0.535714C0.239833 6.44531 0 6.65517 0 6.91406V8.08594C0 8.34483 0.239833 8.55469 0.535714 8.55469ZM0.535714 13.2422H14.4643C14.7602 13.2422 15 13.0323 15 12.7734V11.6016C15 11.3427 14.7602 11.1328 14.4643 11.1328H0.535714C0.239833 11.1328 0 11.3427 0 11.6016V12.7734C0 13.0323 0.239833 13.2422 0.535714 13.2422Z" fill="#BC3333"/>
                  </svg>
                </span>
                DENSITY
              </button>
          
          <table className="w-full table-auto">
            <thead>
              <tr className="">
                <th className="px-4 py-2 text-start border border-gray-400">ID</th>
                <th className="px-4 py-2 text-start border border-gray-400 "><p>Client</p></th>
                <th className="px-4 py-2 text-start border border-gray-400">Group</th>
                <th className="px-4 py-2 text-start border border-gray-400">Phone&nbsp;No</th>
                <th className="px-4 py-2 text-start border border-gray-400">Name</th>
                <th className="px-4 py-2 text-start border border-gray-400">Email</th>
                <th className="px-4 py-2 text-start border border-gray-400">Created&nbsp;At</th>
              </tr>
            </thead>
            <tbody>
                <tr className='h-44'>
                  <td className="px-4 py-2 bg-gray-300"></td>
                  <td className="px-4 py-2 bg-gray-300"></td>
                  <td className="px-4 py-2 bg-gray-300"></td>
                  <td className="px-4 py-2 bg-gray-300">No rows</td>
                  <td className="px-4 py-2 bg-gray-300"></td>
                  <td className="px-4 py-2 bg-gray-300"></td>
                  <td className="px-4 py-2 bg-gray-300"></td>
                </tr>
            </tbody>
          </table>
          <div className="flex justify-end items-center gap-8 my-2">
                    <span>0-0 of 0 </span>
                    <div>
                        <button className="px-4 py-2 rounded-md">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.95395 8.54799L11.6206 14.548C11.7206 14.6172 11.8377 14.6577 11.9591 14.6652C12.0805 14.6726 12.2016 14.6467 12.3093 14.5903C12.4171 14.5339 12.5073 14.449 12.5703 14.345C12.6333 14.2409 12.6666 14.1216 12.6666 14V1.99999C12.6667 1.87831 12.6335 1.75893 12.5705 1.65478C12.5076 1.55064 12.4174 1.4657 12.3096 1.40918C12.2019 1.35265 12.0807 1.3267 11.9592 1.33413C11.8378 1.34156 11.7207 1.38209 11.6206 1.45133L2.95395 7.45133C2.86566 7.51295 2.79355 7.59498 2.74376 7.69045C2.69397 7.78591 2.66797 7.89199 2.66797 7.99966C2.66797 8.10733 2.69397 8.21341 2.74376 8.30888C2.79355 8.40434 2.86566 8.48637 2.95395 8.54799Z" fill="black"/>
                                </svg>
                            </span>
                        </button>

                        <span className="mx-2">1 of 1</span>

                        <button className="px-4 py-2 rounded-md">
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.69132 14.5907C3.79916 14.6468 3.92025 14.6725 4.04157 14.665C4.1629 14.6575 4.27989 14.617 4.37998 14.5481L13.0467 8.54806C13.1352 8.48671 13.2076 8.4048 13.2576 8.30936C13.3075 8.21393 13.3337 8.1078 13.3337 8.00006C13.3337 7.89232 13.3075 7.78619 13.2576 7.69076C13.2076 7.59532 13.1352 7.51341 13.0467 7.45206L4.37998 1.45206C4.27997 1.38286 4.16292 1.34233 4.04153 1.33487C3.92013 1.32742 3.79901 1.35331 3.69127 1.40975C3.58354 1.4662 3.49329 1.55104 3.43032 1.65509C3.36734 1.75914 3.33403 1.87843 3.33398 2.00006V14.0001C3.33396 14.1218 3.36725 14.2411 3.43024 14.3452C3.49323 14.4494 3.58352 14.5343 3.69132 14.5907Z" fill="black"/>
                            </svg>
                        </span>
                        </button>
                    </div>
                </div>
        </div>
        
       
      </div>
    </main>
  )
}

export default Contacts