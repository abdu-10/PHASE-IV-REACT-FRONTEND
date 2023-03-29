import { backendAxios } from "../axios";

export const registerOwner = async (
  full_name,
    username,
    phone_number,
    password,
    password_confirmation,
) => {
  return await backendAxios.post("/owners", {
    full_name,
    username,
    phone_number,
    password,
    password_confirmation,
  });
};
export const logInOwner = async (    
    username,
    password
  ) => {
    return await backendAxios.post("/login", {
        username,
        password
    });
};

export const createBike = async (
  model,
  cc,
  reg_number,
  price,
  owner_id,
  location,
  image_url
) => {
  return await backendAxios.post("/bikes", {
    model,
    cc,
    reg_number,
    price,
    owner_id,
    location,
  image_url
  });
};

export const allRiders = async () => {
  return await backendAxios.get("/riders");
};
// TODO: REMOVE HARDCODED OWNER_ID
let owner_id = 2;
export const myRiders = async (owner_id) => {
  return await backendAxios.get(`/rider_bikes/riders/${owner_id}`);
};
export const riderDetails = async (rider_id) => {
  return await backendAxios.get(`/riders/${rider_id}`);
};
