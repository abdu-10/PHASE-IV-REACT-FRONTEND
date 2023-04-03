import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentBikeDetail } from "../../features/bikeSlice";
import { selectCurrentRiderDetail } from "../../features/riders/riderSlice";
import NavPanel from "./joint/NavPanel";
import { bookBike } from "../../api/rider/rider";
import CustomSnackbar from "../common/CustomSnackbar";
import { Dialog } from "@mui/material";


function BikeDetails(
  {openBikeDetails,
  closeBikeDetails,
  currentBikeData,
}
) {
  const bikeData = useSelector(selectCurrentBikeDetail);
  
  const currentRiderDetails = useSelector(selectCurrentRiderDetail);
  let rider_id = currentRiderDetails.id;
  let bike_id = bikeData.id
  let owner_id = bikeData.owner_id
  console.log(bike_id, owner_id);
  const [values, setValues] = useState({
    model: "",
    cc: "",
    reg_number: "",
    price: "",
    location: "",
    image_url: "",

    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });
  const {
    model,
    cc,
    reg_number,
    price,
    location,
    image_url,

    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
  } = values;

  function handleBookBike() {
    console.log("rider~> ", rider_id, "bike ~>", bike_id, "owner ~>", owner_id);
    return bookBike(rider_id, bike_id, owner_id).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setValues({
          ...values,
          snackbarMessage: "Biked booked Successfully!",
          openSnackbar: true,
          snackbarSeverity: "success",
        });
      } else {
        setValues({
          ...values,
          snackbarMessage: res.data.message,
          openSnackbar: true,
          snackbarSeverity: "error",
        });
      }
    });
  }
  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setValues({ ...values, openSnackbar: false });
  };

  // prepopulate our form with data in state
  useEffect(() => {
    const { model, cc, reg_number, price, location, image_url } =
      bikeData;
    setValues({
      ...values,
      model,
      cc,
      reg_number,
      price,
      location,
      image_url,

      snackbarMessage,
      openSnackbar,
      snackbarSeverity,
    });
  }, []);
  return (
    <>
      {/* <NavPanel /> */}
      <Dialog
      maxWidth="lg"
      fullWidth
      open={openBikeDetails}
      onClose={closeBikeDetails}
      >
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleClose={closeSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
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
                  name="model"
                  value={model}
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
                  type="text"
                  name="cc"
                  value={cc}
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
              type="text"
              name="reg_number"
              value={reg_number}
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
              type="text"
              name="price"
              value={price}
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
              for="image_url"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Image
            </label>
          
            <input
              id="image_url"
              src={image_url}
              name="image_url"
              value={image_url}
              type="image"
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </form>
          <button
            onClick={handleBookBike}
            class="bg-blue-500 hover:bg-blue-700 mt-3 text-white font-bold py-2 px-4 rounded"
          >
            Book
          </button>
        </div>
      </div>
      </Dialog>
    </>
  );
}

export default BikeDetails;
