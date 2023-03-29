import React, { useEffect, useState } from "react";
import NavBar from "./shared/NavBar";
import { allRiders } from "../../api/owner/owner";
import { Typography, Stack, IconButton, Avatar, Box, LinearProgress, } from "@mui/material";
import CustomTable from "../common/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { setCurrentRiderDetail } from "../../features/riders/riderSlice";


import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";


function AllRiders() {
  const [loading, setLoading] = useState(false);
  const [ridersData, setRidersData] = useState([]);
  const [rowParams, setRowParams] = useState({});
  const [rowData, setRowData] = useState([]);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRiderActionClick = (params) => (event) => {
    setRowParams(params.row)
    console.log(rowParams)
    dispatch(setCurrentRiderDetail({currentRiderDetail: params.row}))
    navigate("view")
  }

  

  const fetchRiders = () => {
    setLoading(true);
    allRiders().then((res) => {
      setRidersData(res.data)
      setLoading(false);
    });    
  };

  useEffect(() => {
    fetchRiders();
  }, []);
  function getRidersFullName(params) {
    return `${params.row.first_name || ""} ${params.row.surname || ""}`;
  }
  const columns = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 50,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 2 }} src={params.value} alt={params.value} />            
          </>
        );
      },
    },
    {
      field: "full_name",
      headerName: "Rider Name",
      width: 250,
      
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
      field: "licence_number",
      headerName: "Driver License",
      width: 150,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 80,
      renderCell: (params) => {
        return (
          <IconButton onClick={handleRiderActionClick(params)}>
            <VisibilityOutlinedIcon />
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
    //     return (
    //       // on click on the viw, user is able to see the rider deatils in depth
    //       <div onClick={handleRiderActionClick(params)}>
    //       <Box display="flex" alignItems="center" textAlign="center" >
    //           <VisibilityOutlinedIcon
    //             sx={{
    //               color: `primary.main`,
    //               mr: 1,
    //               fontSize: "medium",
    //             }}
    //           />
    //         </Box>
    //       </div>
    //     );
    //   },
    // },
  ]
  return (
    <>
      
      <NavBar/>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 2 }}
      >
        <Typography>These are the verified Riders on the platform</Typography>
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
        {loading && <LinearProgress/>}
        {!loading && <CustomTable rows={ridersData} columns={columns}/>}
      </Box>
    </>
  );
}

export default AllRiders;
