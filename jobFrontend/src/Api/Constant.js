import { getToken } from "../Utils/Jwt-Utils";
export const API_URLS = {
   

}


export const BASE_URL = 'http://localhost:8080';


export const getHeaders = () => {
  return {
    'Authorization': `Bearer ${getToken()}`,
    'Content-Type': 'application/json', // ✅ Add this
  };
};
