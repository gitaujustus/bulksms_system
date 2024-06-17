import React from 'react';

const ContactsGroups = () => {
  return (
    <div className="bg-white m-12 p-4 rounded-md mt-14 md:mt-0 md:ml-80">
      <div className="flex justify-between mb-4 ">
        <h2 className="text-lg font-bold">Contacts Groups</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">+ ADD NEW</button>
      </div>
      <div className="flex justify-end gap-4 mb-2">
        <button className="bg-gray-300 px-4 py-2 rounded-md">DENSITY</button>
        <button className="bg-gray-300 px-4 py-2 rounded-md">EXPORT</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border border-black">
              <th className="px-4 py-2 border border-black">ID</th>
              <th className="px-4 py-2 border border-black">Name</th>
              <th className="px-4 py-2 border border-black">Description</th>
              <th className="px-4 py-2 border border-black">Contacts</th>
              <th className="px-4 py-2 border border-black">Created at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-black">26680</td>
              <td className="px-4 py-2 border border-black">hqwhats</td>
              <td className="px-4 py-2 border border-black"></td>
              <td className="px-4 py-2 border border-black">0</td>
              <td className="px-4 py-2 border border-black">2024-04-15 08:11</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <span>1 row selected</span>
        <div>
          <button className="bg-gray-300 px-4 py-2 rounded-md">{'<'}</button>
          <span className="mx-2">1 of 1</span>
          <button className="bg-gray-300 px-4 py-2 rounded-md">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default ContactsGroups;