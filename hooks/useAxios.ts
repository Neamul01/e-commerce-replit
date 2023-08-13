import axios from "axios";

const axiosInterceptorInstance = axios.create({
  baseURL: "https://otp.dev/api/", // Replace with your API base URL
});
