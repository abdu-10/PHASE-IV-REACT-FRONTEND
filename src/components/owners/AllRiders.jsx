import React, { useEffect, useState } from "react";
import NavBar from "./shared/NavBar";
import { allRiders } from "../../api/owner/owner";
import { Typography, Stack, Avatar, Box, LinearProgress, } from "@mui/material";
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
      field: "first_name",
      headerName: "First Name",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 2 }} src={params.value} alt={params.value} />
            {getRidersFullName(params)};
          </>
        );
      },
    },
    {
      field: "last_name",
      headerName: "Surname",
      width: 150,
      
    },
    {
      field: "location",
      headerName: "Location",
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
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 80,
      renderCell: () => {
        return (
          <>
          <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
            </Box>
          </>
        );
      },
    },
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
