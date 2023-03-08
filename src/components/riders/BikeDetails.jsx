import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { selectCurrentBikeDetail } from "../../features/bikeSlice";
import { selectCurrentRiderDetail } from "../../features/riders/riderSlice";
import NavPanel from "./joint/NavPanel";

import { bookBike } from "../../api/rider/rider";
import CustomSnackbar from "../common/CustomSnackbar";

function BikeDetails() {
  const currentBikeDetails = useSelector(selectCurrentBikeDetail)
  console.log(currentBikeDetails)
  const currentRiderDetails = useSelector(selectCurrentRiderDetail)
  let rider_id = currentRiderDetails.id
  let bike_id = currentBikeDetails.id
  const [values, setValues] = useState(
    {
      model:"",
      cc: "",
      reg_number: "",
      price: "",
      booked: "",
      
      snackbarMessage: "",
        openSnackbar: false,
        snackbarSeverity: "success",
    }
  ) 
  const {
    model,
    cc,
    reg_number,
    price,
    booked,

    snackbarMessage,
    openSnackbar,
    snackbarSeverity
  } = values

  function handleBookBike(){
    console.log(rider_id, bike_id)
    return bookBike(rider_id, bike_id)    
    .then((res) =>{
      if (res.status === 200 || res.status === 201){
        setValues({
          ...values,
          snackbarMessage: "Biked booked Successfully!",
          openSnackbar: true,
          snackbarSeverity: "success",
        });
      }else{
        setValues({
          ...values,
          snackbarMessage: res.data.message,
          openSnackbar: true,
          snackbarSeverity: "error",
        });
      }
  })
  

  }
  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setValues({ ...values, openSnackbar: false });
};

  
  // prepopulate our form with data in state
  useEffect( () => {
    const {
      model,
      cc,
      reg_number,
      price,
      booked,
    } = currentBikeDetails
    setValues({
      ...values,
      model,
      cc,
      reg_number,
      price,
      booked,

      snackbarMessage,
    openSnackbar,
    snackbarSeverity
    })
  }, []);
  return (
    <>
    <NavPanel/>
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
                  type="number"
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
              for="booked"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Booked
            </label>
            <input
              id="booked"
              type="text"
              name="booked"
              value={booked}
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </form>
          <button onClick={handleBookBike} class="bg-blue-500 hover:bg-blue-700 mt-3 text-white font-bold py-2 px-4 rounded">
  Book
</button>
        </div>
      </div>
      ;
    </>
  );
}

export default BikeDetails;
