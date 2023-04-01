import React, { useEffect, useState } from "react";
import { myBikes } from "../../api/owner/owner";
import { Typography, Stack, Avatar, Box, MenuItem, Menu, IconButton, LinearProgress } from "@mui/material";
import CustomTable from "../common/CustomTable";
import NavBar from "./shared/NavBar";
import { useSelector } from "react-redux";
import { selectCurrentOwnerDetail } from "../../features/owners/ownersSlice";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import BikeDetails from "../riders/BikeDetails";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { setCurrentBikeDetail } from "../../features/bikeSlice";
function MyBikes(){
    const currentOwnerDetails = useSelector(selectCurrentOwnerDetail)
    let owner_id = currentOwnerDetails.id
    const [loading, setLoading] = useState(false);
  const [ownerBikesData, setOwnerBikesData] = useState([]);
  const [openBikeDetails, setOpenBikeDetails] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rowParams, setRowParams] = useState({});

  const fetchOwnerBikes = async () => {
    setLoading(true);
    const payload = await myBikes(owner_id)    
    setOwnerBikesData(payload.data.map( entry => entry.bike ))
      setLoading(false);
       
  };

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
          bike_code={rowParams.code}
          // deactivationStatus={deactivationStatus}
          // fetchStays={fetchRider_Bikes}
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
        </Menu>{" "}
      </>
    );
  };
  useEffect(() => {
    fetchOwnerBikes();
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
      headerName: "Price Paid",
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

  ]

return(
<>
<NavBar user={currentOwnerDetails}/>

<div class="flex-grow sm:text-left text-center mt-10 mb-10" >
       </div>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 7 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "800" }}>This are your bikes</Typography>
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
        {loading && <LinearProgress/>}
        {!loading && <CustomTable rows={ownerBikesData} columns={columns}/>}
      </Box>

      <footer class="bg-white rounded-lg shadow  m-4">
    <div class="w-full max-w-screen-xl absolute bottom-0 mt-12 mx-auto p-4 md:py-8">
       
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://abdu.com/" class="hover:underline">BikeFleet™</a>. All Rights Reserved.</span>
    </div>
</footer>

</>
)
}

export default MyBikes;