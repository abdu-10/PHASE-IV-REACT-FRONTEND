import { backendAxios } from "../axios";

export const registerOwner = async (
  first_name,
  last_name,
  location,
  avatar,
  email,
  phone_number,
  password
) => {
  return await backendAxios.post("/owners", {
    first_name,
    last_name,
    location,
    avatar,
    email,
    phone_number,
    password,
  });
};
export const logInOwner = async (    
    email,
    password
  ) => {
    return await backendAxios.post("/login", {
        email,
        password
    });
};

export const createBike = async (
  model,
  cc,
  reg_number,
  price,
  booked,
  owner_id
) => {
  return await backendAxios.post("/bikes", {
    model,
    cc,
    reg_number,
    price,
    booked,
    owner_id,
  });
};

export const allRiders = async () => {
  return await backendAxios.get("/riders");
};
// TODO: REMOVE HARDCODED OWNER_ID
let owner_id = 2;
export const myRiders = async (owner_id) => {
  return await backendAxios.get(`/riders/${owner_id}`);
};
export const riderDetails = async (rider_id) => {
  return await backendAxios.get(`/riders/${rider_id}`);
};
