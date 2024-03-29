import React, { useState } from "react";
import { registerOwner } from "../../api/owner/owner";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Navigation from "../common/Navigation";
import NavBar from "./shared/NavBar";
import { setCurrentOwnerDetail } from "../../features/owners/ownersSlice";

function RegisterOwner() {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    full_name: "",
    username: "",
    phone_number: 0,
    password: "",
    password_confirmation: "",
  });
  const{
    full_name,
    username,
    phone_number,
    password,
    password_confirmation,
  } = values;
  const navigate = useNavigate();
  
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [key]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    return registerOwner(
      full_name,
      username,
      phone_number,
      password,
      password_confirmation,
    ).then((res) => {
      if (res.status == 201) {
        console.log("Account created"); 
        navigate("/owner/login")
        dispatch(setCurrentOwnerDetail({currentOwnerDetail: res.data}))       
        
      } else {
        console.log(res.data.message);
      }
    });
    // .then((response) => setFormData(response.data));
  };
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
                        <label for="full_name">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={full_name}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="username">User Name</label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={username}
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
                          placeholder="254722220000"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label for="password">Enter Prefered Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={password}
                          placeholder="******"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label for="password_confirmation">Enter Password Again</label>
                        <input
                          type="password"
                          name="password_confirmation"
                          id="password_confirmation"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={password_confirmation}
                          placeholder="******"
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
    </>
  );
}

export default RegisterOwner;
