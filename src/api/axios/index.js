import axios from "axios";

// TODO: Replace baseurl string with environment variables on deployment
// const backendAxios = axios.create({
//     baseURL: process.env.VITE_APP_BACKENDAPI,
// });
const backendAxios = axios.create({
    baseURL: "https://bike-fleet-backend.onrender.com",
});

export { backendAxios };