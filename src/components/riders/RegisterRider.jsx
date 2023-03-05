import React, { useState } from "react";
import { registerRider } from "../../api/rider/rider";
import { NavLink } from "react-router-dom";
import Navigation from "../common/Navigation";

function RegisterRider() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    location: "",
    avatar: "",
    email: "",
    phone_number: "",
    id_number: "",
    license_number: "",
    spouse_number: "",
  });
  const {
    first_name,
    last_name,
    location,
    avatar,
    email,
    phone_number,
    id_number,
    license_number,
    spouse_number,
  } = formData
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
      console.log(formData)
  } 
  function handleSubmit(e) {
    e.preventDefault();
    return registerRider(
      first_name,
      last_name,
      location,
      avatar,
      email,
      phone_number,
      id_number,
      license_number,
      spouse_number
    ).then((res) => {
      if (res.status == 200) {
        console.log("Account created");
      } else {
        console.log(res.data.message);
      }
    });
  }
  return (
    <>
    <Navigation/>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="first_name">First Name</label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={first_name}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="last_name">Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={last_name}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label for="location">Location</label>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={location}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="avatar">Avatar</label>
                        <input
                          type="url"
                          name="avatar"
                          id="avatar"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={avatar}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={email}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="phone_number">Phone Number</label>
                        <input
                          type="number"
                          name="phone_number"
                          id="phone_number"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={phone_number}
                          placeholder=""
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label for="id_number">Id Number</label>
                        <input
                          type="number"
                          name="id_number"
                          id="id_number"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={id_number}
                          placeholder=""
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label for="driver_license">Driver License</label>
                        <input
                          type="number"
                          name="license_number"
                          id="driver license"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={license_number}
                          placeholder=""
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label for="spouse_number">Spouse Number</label>
                        <input
                          type="number"
                          name="spouse_number"
                          id="spouse_number"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={spouse_number}
                          placeholder=""
                        />
                      </div>
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default RegisterRider;
