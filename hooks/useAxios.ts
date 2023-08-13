import axios from "axios";

const useAxios = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/Neamul01/e-commerce-replit/main/data",
});
export default useAxios;
