import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./shared/NavBar";

import { selectCurrentRiderDetail } from "../../features/riders/riderSlice";

function RiderDetails() {
  const [values, setValues] = useState(
    {
      first_name: "",
      last_name: "",
      location: "",
      avatar: "",
      email: "",
      phone_number: "",
      id_number: "",
      license_number: "",
      spouse_contact: "",
    }
  )
  const {
    first_name,
    last_name,
    location,
    avatar,
    email,
    phone_number,
    id_number,
    license_number,
    spouse_contact,
  } = values

  const currentRiderDetails = useSelector(selectCurrentRiderDetail)
  console.log(currentRiderDetails)
  // prepopulate our form with data in state
  useEffect( () => {
    const {
      first_name,
      last_name,
      location,
      avatar,
      email,
      phone_number,
      id_number,
      license_number,
      spouse_contact,
    } = currentRiderDetails
    setValues({
      ...values,
      first_name,
      last_name,
      location,
      avatar,
      email,
      phone_number,
      id_number,
      license_number,
      spouse_contact,
    })
  }, []);
  return (
    <>
    <NavBar/>
      <div className="bg-white shadow-md rounded mt-20 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="first_name"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              First Name
            </label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              value={first_name}
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
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
              value={location}
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
              value={email}
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
              value={id_number}
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
              value={phone_number}
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              for="last_name"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Last Name
            </label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              value={last_name}
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
              value={avatar}
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
              value={phone_number}
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
              id="license_number"
              type="text"
              name="license_number"
              value={license_number}
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default RiderDetails;
