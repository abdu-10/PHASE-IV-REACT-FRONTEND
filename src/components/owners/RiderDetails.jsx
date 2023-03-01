import React from "react";

function RiderDetails(){
    <div className="grid min-h-screen place-items-center">
    <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <form className="mt-6">
        <div className="flex justify-between gap-3">
          <span className="w-1/2">
            <label
              for="first_name"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              First Name
            </label>
            <input
              id="first_name"
              type="text"
              name='first_name'
              value='Njoroge'
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
          <span className="w-1/2">
            <label
              for="last_name"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Last Name
            </label>
            <input
              id="last_name"
              type="text"
              name='last_name'
              value='Njoki'
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </span>
        </div>
        <label
          for="location"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Location
        </label>
        <input
          id="location"
          type="text"
          name="location"
          value='Mathare'
              readOnly={true}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        />
        <label
          for="avatar"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Avatar
        </label>
        <input
          id="avatar"
          type="url"
          name="avatar"
          value='Avatar'
              readOnly={true}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        />
        <label
          for="email"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value='njoki@gmail.com'
              readOnly={true}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        />
         <label
          for="phone_number"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Phone Number
        </label>
        <input
          id="phone_number"
          type="text"
          name="phone_number"
          value='+254734789534'
              readOnly={true}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        />
         <label
          for="id_number"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Id Number
        </label>
        <input
          id="id_number"
          type="text"
          name="id_number"
          value='36876709'
              readOnly={true}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        />
         <label
          for="driver_license"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Driver license
        </label>
        <input
          id="driver_license"
          type="text"
          name="driver_license"
          value='7748930'
              readOnly={true}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        />
        <label
          for="spouse_number"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Spouse Number
        </label>
        <input
          id="spouse_number"
          type="text"
          name="phone_number"
          value='+2547347894749'
              readOnly={true}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        />

      </form>
    </div>
  </div>;
}

export default RiderDetails