import React, { useEffect, useState } from "react";
// import NavBar from "./shared/NavBar";
import { allBikes } from "../../api/rider/rider";
import { Typography, Stack, Avatar, Box, LinearProgress, MenuItem, IconButton } from "@mui/material";
import CustomTable from "../common/CustomTable";
import NavPanel from "./joint/NavPanel";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"

import { setCurrentBikeDetail } from "../../features/bikeSlice";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function AllBikes() {
  const [loading, setLoading] = useState(false);
  const [bikesData, setBikesData] = useState([]);
  const [rowParams, setRowParams] = useState({});
  const [rowData, setRowData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBikeActionsClick = (params) => (event) => {
    setRowParams(params.row)
    console.log(rowParams)
    dispatch(setCurrentBikeDetail({ currentBikeDetail: params.row }));    
  }
  const handleViewClick = () => {
    navigate("view", {
      state: {
        rowParams,
      },
    });
    console.log(rowParams)
  };

  const fetchBikes = () => {
    setLoading(true);
    allBikes().then((res) => {
      setBikesData(res.data)
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
        // console.log(params.row);
        return (
            <IconButton onClick={handleBikeActionsClick(params)}>
              <MoreVertIcon onClick={handleViewClick}/>
            </IconButton>
        );
      },
    },

  ]
  return (
    <>
      {/* TO DO: Add a navigation component on top */}
      <NavPanel/>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 2 }}
      >
        <Typography>Browse bike catalogue below, and click on book to get bike</Typography>
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
        {!loading && <CustomTable rows={bikesData} columns={columns}/>}
      </Box>
    </>
  );
}

export default AllBikes;
