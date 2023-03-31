import React from "react";
import NavPanel from "./joint/NavPanel";
import Preface from "./joint/Preface";
import { selectCurrentRiderDetail } from "../../features/riders/riderSlice";
import { useSelector } from "react-redux";
import { selectCurrentBikeDetail } from "../../features/bikeSlice";


function RiderDashboard() {
  const bikeData = useSelector(selectCurrentBikeDetail);
  console.log(bikeData);
  const currentRiderDetails = useSelector(selectCurrentRiderDetail)
  console.log(currentRiderDetails)
  return(
  <>
  <NavPanel avatar={currentRiderDetails.avatar}/>
  <Preface/>
  </>
  )
}

export default RiderDashboard;
