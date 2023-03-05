import { backendAxios } from "../axios";

export const registerOwner = async (
    first_name,
    last_name,
    location,
    avatar,
    email,
    phone_number,
) => {
    return await backendAxios.post('/owners', {
        first_name,
        last_name,
        location,
        avatar,
        email,
        phone_number,
    });
};

export const createBike = async (
    model,
    cc,
    reg_number,
    price,
    booked,
) => {
    return await backendAxios.post('/bikes', {
        model,
        cc,
        reg_number,
        price,
        booked,
    });
};

export const allRiders = async () => {
    return await backendAxios.get('/riders')
}
// TODO: REMOVE HARDCODED OWNER_ID
let owner_id = 2;
export const myRiders = async (owner_id) => {
    return await backendAxios.get(`/riders/${owner_id}`)
}
export const riderDetails = async (rider_id) =>{
    return await backendAxios.get(`/riders/${rider_id}`)
}
