import React from "react";
import NavBar from "./shared/NavBar";
import Intro from "./shared/Intro";
import { selectCurrentOwnerDetail } from "../../features/owners/ownersSlice";
import { useSelector } from "react-redux";

function OwnerDashboard() {
  const currentOwnerDetails = useSelector(selectCurrentOwnerDetail)
  return (
    <>
    {/* TODO: Render navigation bar and intro */}
    <NavBar avatar={currentOwnerDetails.avatar}/>
    <Intro/>
    </>
  );
}

export default OwnerDashboard;
