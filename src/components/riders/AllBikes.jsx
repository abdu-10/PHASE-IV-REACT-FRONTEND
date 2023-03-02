import React from "react";

function AllBikes() {
  return (
    <>
      <div className="relative mt-20 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                CC
              </th>
              <th scope="col" className="px-6 py-3">
                Regestration Number
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Booked
              </th>
              <th scope="col" className="px-6 py-3">
                Owner Id
              </th>
              <th scope="col" className="px-6 py-3">
                Rider Id
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kawasaki
              </th>
              <td className="px-6 py-4">550</td>
              <td className="px-6 py-4">KMDE 246L</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">True</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Honda
              </th>
              <td className="px-6 py-4">700</td>
              <td className="px-6 py-4">KMFS 932B</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">False</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                KTM
              </th>
              <td className="px-6 py-4">850</td>
              <td className="px-6 py-4">KMFC 567A</td>
              <td className="px-6 py-4">$9999</td>
              <td className="px-6 py-4">True</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllBikes;
