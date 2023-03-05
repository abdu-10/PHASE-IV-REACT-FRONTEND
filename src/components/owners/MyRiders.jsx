import React, { useEffect, useState } from "react";
import NavBar from "./shared/NavBar";
import { Typography, Stack, Avatar, Box, LinearProgress } from "@mui/material";
import CustomTable from "../common/CustomTable";
import { myRiders } from "../../api/owner/owner";

function MyRiders() {
  // TO DO: REPLACE HARD CODED OWNER ID WITH OWNER_ID IN STATE
  let owner_id = 2;
  const [loading, setLoading] = useState(false);
  const [myRidersData, setMyRidersData] = useState([]);
  const fetchMyRiders = () => {
    setLoading(true);
    myRiders(owner_id).then((res) => {
      setMyRidersData(res.data)
      setLoading(false);
    });    
  };


  useEffect(() => {
    fetchMyRiders();
  }, []);
  const columns = [
    {
      field: "first_name",
      headerName: "First Name",
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
      field: "id_number",
      headerName: "ID Number",
      width: 150,
    },
  ]
  return (
    <>
      {/* TO DO: Add a navigation component on top */}
      <NavBar />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 2 }}
      >
        <Typography>These are your</Typography>
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
        {!loading && <CustomTable rows={myRidersData} columns={columns}/>}
      </Box>
    </>
  );
}

export default MyRiders;
