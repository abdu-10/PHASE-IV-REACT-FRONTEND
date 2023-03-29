import React, { useEffect, useState } from "react";
// import NavBar from "./shared/NavBar";
import { riderBikes } from "../../api/rider/rider";
import { Typography, Stack, Avatar, Box, LinearProgress } from "@mui/material";
import CustomTable from "../common/CustomTable";
import NavPanel from "./joint/NavPanel";
import { useSelector } from "react-redux";
import { selectCurrentRiderDetail } from "../../features/riders/riderSlice";


function RiderBikes() {
  const currentRiderDetails = useSelector(selectCurrentRiderDetail)
  let rider_id = currentRiderDetails.id
  const [loading, setLoading] = useState(false);
  const [riderBikesData, setRiderBikesData] = useState([]);
  const fetchRiderBikes = async () => {
    setLoading(true);
    const payload = await riderBikes(rider_id)    
    setRiderBikesData(payload.data.map( entry => entry.bike ))
      setLoading(false);
       
  };

  useEffect(() => {
    fetchRiderBikes();
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
        <Typography>This are your hired bikes</Typography>
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
        {!loading && <CustomTable rows={riderBikesData} columns={columns}/>}
      </Box>
    </>
  );
}

export default RiderBikes;
