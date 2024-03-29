import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
// import NavBar from "./shared/NavBar";
import { Dialog } from "@mui/material";
// import { selectCurrentBikeDetail } from "../../features/bikeSlice";

import { selectCurrentRiderDetail } from "../../../features/riders/riderSlice";
import { setCurrentRiderDetail } from "../../../features/riders/riderSlice";
import { updateRiderDetail } from "../../../api/rider/rider";
import { fetchRider } from "../../../api/rider/rider";



function EditRiderDetails({ openEditRiderDetails, closeEditRiderDetails }) {
  const [values, setValues] = useState({
    full_name: "",
    username: "",
    email: "",
    date_of_birth: "",
    phone_number: "",
    id_number: "",
    licence_number: "",
    spouse_contact: "",
    password: "",
    password_confirmation: "",
  });
  const {
    full_name,
    username,
    phone_number,
    id_number,
    licence_number,
    spouse_contact,
    email,
    date_of_birth,
    password,
      password_confirmation,
  } = values;
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [key]: value,
    });
  }
  const currentRiderDetails = useSelector(selectCurrentRiderDetail);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let rider_id = currentRiderDetails.id;

  console.log(rider_id);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("update");
    return updateRiderDetail(
      rider_id,
      full_name,
      username,
      phone_number,
      password,
      password_confirmation,
      id_number,
      licence_number,
      spouse_contact,
      email,
      date_of_birth
    ).then((res) => {
      if (res.status == 200) {
        console.log("Account updated");
        fetchRider(rider_id).then((res) => {
            dispatch(setCurrentRiderDetail({ currentRiderDetail: res.data }))
        })
        closeEditRiderDetails()
        navigate("/rider/dashboard");
      } else {
        console.log(res.data.message);
      }
    });
  }

  // prepopulate our form with data in state
  useEffect(() => {
    const {
      full_name,
      username,
      phone_number,
      id_number,
      licence_number,
      spouse_contact,
      email,
      date_of_birth,
      
    } = currentRiderDetails;
    setValues({
      ...values,
      full_name,
      username,
      phone_number,
      id_number,
      licence_number,
      spouse_contact,
      email,
      date_of_birth,
    });
  }, []);
  return (
    <>
      {/* <NavBar/> */}
      <Dialog
        maxWidth="lg"
        fullWidth
        open={openEditRiderDetails}
        onClose={closeEditRiderDetails}
      >
        <div className="bg-white shadow-md rounded mt-20 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <div className="-mx-3 md:flex mb-6">
            <form className="flex" onSubmit={handleSubmit}>
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  for="first_name"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Full Name
                </label>
                <input
                  id="full_name"
                  type="text"
                  name="full_name"
                  value={full_name}
                  onChange={handleChange}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
                <label
                  for="username"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  User Name
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
                <label
                  for="spouse_contact"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Spouse Number
                </label>
                <input
                  id="spouse_contact"
                  type="text"
                  name="spouse_contact"
                  value={spouse_contact}
                  onChange={handleChange}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  for="date_of_birth"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  DOB
                </label>
                <input
                  id="date_of_birth"
                  type="text"
                  name="date_of_birth"
                  value={date_of_birth}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
                <label
                  for="driver_license"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Driver license
                </label>
                <input
                  id="licence_number"
                  type="text"
                  name="licence_number"
                  value={licence_number}
                  onChange={handleChange}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
                <div className="md:col-span-2">
                  <label for="password">Enter Preferred Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={password}
                    placeholder=""
                  />
                </div>
                <div className="md:col-span-2">
                  <label for="password_confirmation">
                    Enter Password Again
                  </label>
                  <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    onChange={handleChange}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={password_confirmation}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bottom mt-96">
                    Update Account Details
                  </button>
                  
                </div>
            
              </div>
              </form>
          </div>
            
        </div>
        
      </Dialog>
    </>
  );
}

export default EditRiderDetails;
