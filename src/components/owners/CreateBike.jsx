import React, { useState } from "react";
import axios from "axios";

const client = axios.create({
    baseURL: "",
  });

function CreateBike() {
    const [formData, setFormData] = useState({
        model: "",
        cc: "",
        reg_number: "",
        price: "",
        booked:"",
      });
      function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
    
        setFormData({
          ...formData,
          [key]: value,
        });
      }
      function handleSubmit(e) {
        e.preventDefault();
        client.post("/").then((response) => setFormData(response.data));
        };
      


  <div className="grid min-h-screen place-items-center">
    <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 className="text-xl font-semibold">
        Hello there ?,{" "}
        <span className="font-normal">
          please fill in your Bike information to continue
        </span>
      </h1>
      <form className="mt-6"
      onSubmit={handleSubmit}>
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
              name='model'
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
              name='cc'
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
          type="number"
          name="reg_number"
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
          type="number"
          name="price"
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />
        <label
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
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />
        <button
          type="submit"
          className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        >
          Submit
        </button>
      </form>
    </div>
  </div>;
}

export default CreateBike;
