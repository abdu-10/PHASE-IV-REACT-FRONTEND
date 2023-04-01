import React, { useEffect, useState } from "react";
import NavBar from "./shared/NavBar";
import { myRiders } from "../../api/owner/owner";
import { Typography, Stack, IconButton, Avatar, Box, Menu, MenuItem, LinearProgress } from "@mui/material";
import CustomTable from "../common/CustomTable";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { setCurrentRiderDetail } from "../../features/riders/riderSlice";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RiderDetails from "./RiderDetails";
import { selectCurrentOwnerDetail } from "../../features/owners/ownersSlice";



function MyRiders() {
  const currentOwnerDetails = useSelector(selectCurrentOwnerDetail)
  let owner_id = currentOwnerDetails.id
  // TO DO: REPLACE HARD CODED OWNER ID WITH OWNER_ID IN STATE
  
  const [loading, setLoading] = useState(false);
  const [myRidersData, setMyRidersData] = useState([]);
  const [openRiderDetails, setOpenRiderDetails] = useState(false);
  const [rowParams, setRowParams] = useState({});
  const [rowData, setRowData] = useState([]);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const fetchMyRiders = async () => {
    setLoading(true);
    const payload = await myRiders(owner_id)    
    setMyRidersData(payload.data.map( entry => entry.rider ))
      setLoading(false);
       
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const closeRiderDetails = () => {
    setOpenRiderDetails(false);
  };
  const handleRiderActionsClick = (params) => (event) => {
    setRowParams(params.row);
    setAnchorElNav(event.currentTarget);
  }
  const handleMenuItemClick = (prop) => {
    console.log(`${prop} click params`, rowParams);   
    if (prop === "view") {
      dispatch(setCurrentRiderDetail({ currentRiderDetail: rowParams }));
      setOpenRiderDetails(true);
      handleCloseMenu();
    } else if (prop === "edit") {      
      dispatch(setCurrentRiderDetail({ currentRiderDetail: rowParams }));
    }else if (prop === "delete"){
      dispatch(setCurrentRiderDetail({ currentRiderDetail: rowParams }));

    } else
    handleCloseMenu();
  };
  const RiderActions = () => {
    return (
      <>
        {" "}
        <RiderDetails
          openRiderDetails={openRiderDetails}
          closeRiderDetails={closeRiderDetails}
        />{" "}
        {/* <DeleteAccount
          openDeleteAccount={openDeleteAccount}
          closeDeleteModal={closeDeleteModal}
          rider_code={rowParams.code}
          // deactivationStatus={deactivationStatus}
          // fetchStays={fetchRiders}
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
    fetchMyRiders();    
  }, []);
  const columns = [
    {
      field: "full_name",
      headerName: "Full Name",
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
      field: "date_of_birth",
      headerName: "DOB",
      width: 150,
    },
    {
      field: "phone_number",
      headerName: "Telephone",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "id_number",
      headerName: "ID Number",
      width: 150,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 80,
      renderCell: (params) => {
        return (
          <IconButton onClick={handleRiderActionsClick(params)}>
            <MoreVertIcon/>
          </IconButton>
        );
      },
    },
  ]
  return (
    <>
      {/* TO DO: Add a navigation component on top */}
      <NavBar user={currentOwnerDetails} />
      <div class="flex-grow sm:text-left text-center mt-10 mb-10" >
       </div>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 7 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "800" }}>These are your Riders</Typography>
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
        <RiderActions/>
        {loading && <LinearProgress/>}
        {!loading && <CustomTable rows={myRidersData} columns={columns}/>}
      </Box>

      <footer class="bg-white rounded-lg shadow  m-4">
    <div class="w-full max-w-screen-xl absolute bottom-0 mt-12 mx-auto p-4 md:py-8">
       
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://abdu.com/" class="hover:underline">BikeFleet™</a>. All Rights Reserved.</span>
    </div>
</footer>
    </>
  );
}

export default MyRiders;
