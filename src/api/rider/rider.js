import { backendAxios } from "../axios";

export const registerRider = async (
  full_name,
    username,
    phone_number,
    password,
    password_confirmation,
    id_number,
    licence_number,
    spouse_contact,
    email,
    date_of_birth,
) => {
  return await backendAxios.post("/riders", {
    full_name,
    username,
    phone_number,
    password,
    password_confirmation,
    id_number,
    licence_number,
    spouse_contact,
    email,
    date_of_birth,
  });
};

export const allBikes = async () => {
  return await backendAxios.get("/bikes");
};
export const riderBikes = async (rider_id) => {
  return await backendAxios.get(`/rider_bikes/bikes/${rider_id}`);
};
export const bikeDetails = async (bike_id) => {
  return await backendAxios.get(`/bikes/${bike_id}`);
};
export const bookBike = async (rider_id, bike_id, owner_id) => {
  return await backendAxios.post(`/rider_bikes`, {
    rider_id,
    bike_id,
    owner_id,
  });
};
