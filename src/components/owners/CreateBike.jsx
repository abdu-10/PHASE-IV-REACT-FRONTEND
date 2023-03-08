import React, { useState } from "react";
import { selectCurrentOwnerDetail } from "../../features/owners/ownersSlice";
import { useSelector } from "react-redux"
import { createBike } from "../../api/owner/owner";

import NavBar from "./shared/NavBar";

function CreateBike() {
  const currentOwnerDetails = useSelector(selectCurrentOwnerDetail)
  let owner_id = currentOwnerDetails.id
  console.log(owner_id)
  const [formData, setFormData] = useState({
    model: "",
    cc: "",
    reg_number: "",
    price: "",
    booked: false,
  });
  const {
    model,
    cc,
    reg_number,
    price,
    booked,
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
  function handleCreateBike(e) {
    e.preventDefault();
    return createBike(model, cc, reg_number, price, booked, owner_id).then((res) => {
      if (res.status == 200) {
        console.log("Bike created");
      } else {
        console.log(res.data.message);
      }
    });
  }
  return (
    <>
      <NavBar/>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            <strong> BIKE  REGISTRATION FORM</strong>
          </h1>
          <form className="mt-6" onSubmit={handleCreateBike}>
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
                  onChange={handleChange}
                  type="text"
                  name="model"
                  value={model}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
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
                  onChange={handleChange}
                  type="number"
                  name="cc"
                  value={cc}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
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
              onChange={handleChange}
              type="text"
              name="reg_number"
              value={reg_number}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              for="price"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Price
            </label>
            <input
              id="price"
              onChange={handleChange}
              type="text"
              name="price"
              value={price}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            {/* <label
              for="booked"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Booked
            </label>
            <input
              id="booked"
              onChange={handleChange}
              type="text"
              name="booked"
              value={booked}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            /> */}
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      ;
    </>
  );
}

export default CreateBike;
