import { backendAxios } from "../axios";

export const registerRider = async (
  first_name,
  last_name,
  location,
  avatar,
  email,
  phone_number,
  id_number,
  license_number,
  spouse_contact,
  password
) => {
  return await backendAxios.post("/riders", {
    first_name,
    last_name,
    location,
    avatar,
    email,
    phone_number,
    id_number,
    license_number,
    spouse_contact,
    password,
  });
};

export const allBikes = async () => {
  return await backendAxios.get("/bikes");
};
export const riderBikes = async (rider_id) => {
  return await backendAxios.get(`/bikies/${rider_id}`);
};
export const bikeDetails = async (bike_id) => {
  return await backendAxios.get(`/bikes/${bike_id}`);
};
export const bookBike = async (rider_id, bike_id) => {
  return await backendAxios.patch(`/bikes/${bike_id}`, {
    rider_id,
    booked: true,
  });
};
