import React, { useEffect, useState } from "react";
// import NavBar from "./shared/NavBar";
import { allBikes } from "../../api/rider/rider";
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
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomTable from "../common/CustomTable";
import NavPanel from "./joint/NavPanel";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import BikeDetails from "./BikeDetails"

import { setCurrentBikeDetail } from "../../features/bikeSlice";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function AllBikes() {
  const [loading, setLoading] = useState(false);
  const [bikesData, setBikesData] = useState([]);
  const [openBikeDetails, setOpenBikeDetails] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rowParams, setRowParams] = useState({});
  const [rowData, setRowData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const closeBikeDetails = () => {
    setOpenBikeDetails(false);
  };

  const handleBikeActionsClick = (params) => (event) => {
    setRowParams(params.row);
    setAnchorElNav(event.currentTarget);
  }

  const handleMenuItemClick = (prop) => {
    console.log(`${prop} click params`, rowParams);   
    if (prop === "view") {
      dispatch(setCurrentBikeDetail({ currentBikeDetail: rowParams }));
      setOpenBikeDetails(true);
      handleCloseMenu();
    } else if (prop === "edit") {      
      dispatch(setCurrentBikeDetail({ currentBikeDetail: rowParams }));
    }else if (prop === "delete"){
      dispatch(setCurrentBikeDetail({ currentBikeDetail: rowParams }));

    } else
    handleCloseMenu();
  };
  const BikeActions = () => {
    return (
      <>
        {" "}
        <BikeDetails
          openBikeDetails={openBikeDetails}
          closeBikeDetails={closeBikeDetails}
        />{" "}
        {/* <DeleteAccount
          openDeleteAccount={openDeleteAccount}
          closeDeleteModal={closeDeleteModal}
          Bike_code={rowParams.code}
          // deactivationStatus={deactivationStatus}
          // fetchStays={fetchBikes}
        /> */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
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
              Edit
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
              View
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("delete")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <DeleteIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Delete
            </Box>
          </MenuItem>
        </Menu>{" "}
      </>
    );
  };

  const fetchBikes = () => {
    setLoading(true);
    allBikes().then((res) => {
      setBikesData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchBikes();
  }, []);
  const columns = [
    {
      field: "model",
      headerName: "Bike Brand and Model",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 2 }} src={params.value} alt={params.value} />
            {params.value}
          </>
        );
      },
    },
    {
      field: "cc",
      headerName: "Engine Carrying Capacity(cc)",
      width: 150,
    },
    {
      field: "reg_number",
      headerName: "Number Plate",
      width: 150,
    },
    {
      field: "price",
      headerName: "Asking For Ksh.",
      width: 150,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 80,
      renderCell: (params) => {
        return (
          <IconButton onClick={handleBikeActionsClick(params)}>
            <MoreVertIcon />
          </IconButton>
        );
      },
    },

    // {
    //   field: "actions",
    //   type: "actions",
    //   headerName: "Actions",
    //   width: 80,
    //   renderCell: (params) => {
    //     // console.log(params.row);
    //     return (
    //         <IconButton >
    //           <VisibilityOutlinedIcon/>
    //         </IconButton>
    //     );
    //   },
    // },
  ];
  return (
    <>
      {/* TO DO: Add a navigation component on top */}
      <NavPanel />
      <div class="flex-grow sm:text-left text-center mt-12 mb-7"></div>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 7 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "800" }}>
          Browse bike catalogue below, and click on book to get bike
        </Typography>
      </Stack>
      <Box
        sx={{
          mt: 5,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "primary.lightest_gray",
            fontSize: 16,
          },
        }}
      >
        <BikeActions/>
        {loading && <LinearProgress />}
        {!loading && <CustomTable rows={bikesData} columns={columns} />}
      </Box>

      <footer class="bg-white rounded-lg shadow  m-4">
        <div class="w-full max-w-screen-xl absolute bottom-0 mt-12 mx-auto p-4 md:py-8">
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://abdu.com/" class="hover:underline">
              BikeFleet™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default AllBikes;
