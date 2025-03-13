import axios from "axios";
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
export const api = axios.create({
    timeout: 10000,
    
    headers: {
      "Content-Type": "application/json",
       "Authorization": `Bearer ${accessToken}`
    },
});