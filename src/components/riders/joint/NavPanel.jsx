import React, {useState} from "react";
import { Navigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Typography,
  Stack,
  Avatar,
  Box,
  LinearProgress,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { CoPresentOutlined, Logout } from "@mui/icons-material";
// import { logOut } from "../../../api/owner/owner";

function NavPanel() {
  const [selectedOption, setSelectedOption] =  useState("")
  const [anchMenu, setAnchMenu] = useState(null)
  const handleAccountActionsClick = () => (event) => {
    // setSelectedOption(params);
    console.log("clicked")
    setAnchMenu(event.currentTarget);
  }
  const handleCloseMenu = () => {
    setAnchMenu(null);
  };

  const handleMenuItemClick = (prop) => {
    // console.log(`${prop} click params`, rowParams);
    handleCloseMenu();
    if (prop === "view") {
      // dispatch(setCurrentHouseDetail({ currentHouseDetail: rowParams }));
      setOpenHouseDetails(true);
    } else if (prop === "edit") {
      
      // dispatch(setCurrentHouseDetail({ currentHouseDetail: rowParams }));
    }else if (prop === "delete"){
      console.log("clicked")
      // dispatch(setCurrentHouseDetail({ currentHouseDetail: rowParams }));
      // logOut().then((res) =>{
      //   if (res.status === 204){
      //     Navigate("/")
      //   }
      // })


    } else
    handleCloseMenu();
  };

  const AccountDetails = () => {
    return (
      <>
        {" "}
        {/* <RiderDetails
          openRiderDetails={openRiderDetails}
          closeRiderDetails={closeRiderDetails}
        />{" "}
        <DeleteAccount
          openDeleteAccount={openDeleteAccount}
          closeDeleteModal={closeDeleteModal}
          Rider_code={rowParams.code}
          // deactivationStatus={deactivationStatus}
          // fetchStays={fetchRiders}
        /> */}
        <Menu
          id="menu-appbar"
          anchorEl={anchMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchMenu)}
          onClose={handleCloseMenu}
        >
            <MenuItem onClick={() => handleMenuItemClick("edit")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <EditIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Edit Account Details
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("view")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              View Account Details
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("add-students")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <LogoutIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Log Out
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("add-students")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <DeleteIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Delete Account permanently
            </Box>
          </MenuItem>
        </Menu>{" "}
      </>
    );
  };
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <NavLink to="/">
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/46/22/motorcycle-logo-for-rent-vector-25604622.jpg"
              className="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
          </NavLink>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Bike Fleet
          </span>  
             
                          

          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/rider/dashboard"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rider/bikes"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Rent a bike
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rider/mybikes"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Bikes
                </NavLink>
              </li>
              <button className="text-white text-right" onClick={handleAccountActionsClick()}>My Account</button>             
            </ul>
          </div>
        </div>
      </nav>
      <AccountDetails/>
    </>
  );
}
export default NavPanel;
