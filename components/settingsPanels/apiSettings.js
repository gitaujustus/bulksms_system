import React from 'react'

function APIsettings() {
  return (
    <div>
        <form action="">
        <div> 
                <div className="flex flex-col w-[48%]">
                    <label  className="text-left">Chat ID</label>
                    <input type="text" className="border-2 border-black rounded-lg my-2 outline-8 p-2 text-gray-500" disabled value='Meatsoko' />
                </div>
                
                <div className="flex flex-col my-3 w-[48%]">
                <label className="text-left">API key</label>
                <input type="tel" className="border-2 border-black rounded-lg outline-8 my-2 p-2 text-gray-500" disabled value='tw3ulfhdjmnczxjhdhdjnnx76bj3j4b'/>
              </div>
            </div>
        </form>
    </div>
  )
}

export default APIsettings