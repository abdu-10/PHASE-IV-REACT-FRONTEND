import React from "react";

function BikeDetails(){
    <div className="grid min-h-screen place-items-center">
    <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <form className="mt-6">
        <div className="flex justify-between gap-3">
          <span className="w-1/2">
            <label
              for="model"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Model
            </label>
            <input
              id="model"
              type="text"
              name='model'
              value='Kawasaki'
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span className="w-1/2">
            <label
              for="cc"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              CC
            </label>
            <input
              id="cc"
              type="number"
              name='cc'
              value='650'
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
        </div>
        <label
          for="reg_number"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Registration Number
        </label>
        <input
          id="reg_number"
          type="number"
          name="reg_number"
          value='KMDF 678E'
              readOnly={true}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        />
        <label
          for="price"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Price
        </label>
        <input
          id="price"
          type="number"
          name="price"
          value='$9999'
              readOnly={true}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        />
        <label
          for="booked"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Booked
        </label>
        <input
          id="booked"
          type="text"
          name="booked"
          value='True'
              readOnly={true}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        />
      </form>
    </div>
  </div>;
}

export default BikeDetails