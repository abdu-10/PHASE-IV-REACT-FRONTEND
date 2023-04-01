import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
// import NavBar from "./shared/NavBar";
import { Dialog } from "@mui/material";
import { selectCurrentOwnerDetail } from "../../features/owners/ownersSlice";
import { setCurrentOwnerDetail } from "../../features/owners/ownersSlice";
import { updateOwnerDetail } from "../../api/owner/owner";
import { fetchOwner } from "../../api/owner/owner";
function EditOwnerDetails({ openEditOwnerDetails, closeEditOwnerDetails }){
    const [values, setValues] = useState({
        full_name: "",
        username: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
      });
      const {
        full_name,
        username,
        phone_number,
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
      const currentOwnerDetails = useSelector(selectCurrentOwnerDetail);
      const dispatch = useDispatch()
      const navigate = useNavigate()
      let owner_id = currentOwnerDetails.id;

      console.log(owner_id);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("update");
    return updateOwnerDetail(
      owner_id,
      full_name,
      username,
      phone_number,
      password,
      password_confirmation,
      
    ).then((res) => {
      if (res.status == 200) {
        console.log("Account updated");
        fetchOwner(owner_id).then((res) => {
            dispatch(setCurrentOwnerDetail({ currentOwnerDetail: res.data }))
        })
        closeEditOwnerDetails()
        navigate("/owner/dashboard");
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
      
    } = currentOwnerDetails;
    setValues({
      ...values,
      full_name,
      username,
      phone_number,
    });
  }, []);
    return(
        <>
        {/* <NavBar/> */}
      <Dialog
        maxWidth="lg"
        fullWidth
        open={openEditOwnerDetails}
        onClose={closeEditOwnerDetails}
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
              </div>
              <div className="md:w-1/2 px-3">

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
    )
}

export default EditOwnerDetails;