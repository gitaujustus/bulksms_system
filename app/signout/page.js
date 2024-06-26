'use client'
import { useRouter } from 'next/navigation';

export default function Component() {
    const router = useRouter();
    return (
        <main>
            <div className="mt-14 md:mt-0 md:ml-80 flex min-h-[90vh] items-center justify-center bg-gray-100 ">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md ">
                <div className="p-6 space-y-2 text-center">
                    <h2 className="text-xl font-bold">Sign Out</h2>
                    <p className="text-gray-600 ">Are you sure you want to sign out?</p>
                </div>
                <div className="flex justify-end gap-2 p-6">
                    <button onClick={()=> router.back()}  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 ">
                    Cancel
                    </button>
                    <button onClick={() => console.log()}  className="px-4 py-2 bg-gray-900 text-gray-50 rounded-md hover:bg-gray-900/90 transition">
                    Sign Out
                    </button>
                </div>
                </div>
            </div>
      </main>
    );
  }
