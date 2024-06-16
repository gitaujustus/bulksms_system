
"use client"
import React, { useState } from 'react';

const SendFromFile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-[#d9d9d9] flex flex-col lg:flex-row justify-center p-4 min-h-screen mt-14 md:mt-0 md:ml-80">
      <div className=''>
        <section className="flex items-center justify-center h-auto bg-white m-2 rounded-2xl">
          <div className='py-4 px-2 w-full min-w-72'>
            <h1 className="text-left mx-2 my-1">Send from file</h1>
            <div className="  border-2 border-dashed border-black rounded-lg flex flex-col items-center justify-center p-2 m-2">
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
              >
                <img
                  src="/images/explorer.png"
                  alt="upload placeholder"
                  className="mb-4"
                />
                <p className="text-center text-gray-600">Drag & Drop or</p>
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer mt-2 text-blue-600"
                >
                  Click to upload file(s)
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              {file && (
                <div className="mt-4 text-center">
                  <p className="text-gray-800">File: {file.name}</p>
                </div>
              )}
            </div>
          </div>
        </section>
        <button className="bg-[#1e1e1e] text-white m-4 p-2 rounded-lg flex items-center gap-2">
          <img className="w-10 h-10" src="/images/fileupload.png" alt="fileupload" />
          UPLOAD
        </button>
      </div>

      {/* table */}
      <div className="flex flex-col p-2 w-full">
        <div className="w-full overflow-x-auto bg-slate-700 ">
          <table className="w-full bg-white border border-gray-300 mx-auto">
            <thead>
              <tr>
                <th className="px-2 py-2 border-b border-gray-300 bg-gray-100 font-bold text-left">Cell&nbsp;Number</th>
                <th className="px-2 py-2 border-b border-gray-300 bg-gray-100 font-bold text-left">Username</th>
                <th className="px-2 py-2 border-b border-gray-300 bg-gray-100 font-bold text-left">Order&nbsp;ID</th>
                <th className="px-2 py-2 border-b border-gray-300 bg-gray-100 font-bold text-left">Currency</th>
                <th className="px-2 py-2 border-b border-gray-300 bg-gray-100 font-bold text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {Array(6).fill().map((_, index) => (
                <tr key={index}>
                  <td className="px-2 py-2 border-b border-gray-300">sample cell no.</td>
                  <td className="px-2 py-2 border-b border-gray-300">John</td>
                  <td className="px-2 py-2 border-b border-gray-300">32736</td>
                  <td className="px-2 py-2 border-b border-gray-300">KSH</td>
                  <td className="px-2 py-2 border-b border-gray-300">2500</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-gray-600 text-xs">* Sample</p>
        <button className="mt-4 mx-12 px-6 py-2 bg-red-600 text-white rounded-md">DOWNLOAD</button>
      </div>
    </div>
  );
};

export default SendFromFile;
