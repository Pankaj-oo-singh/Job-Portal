
import axios from "axios";
import { BASE_URL } from "./Constant";


export const registerAPI = async (body)=>{
    const url = BASE_URL + '/auth/signup';
    try{
        const response = await axios(url,{
            method:"POST",
            data:body
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}


// export const loginAPI = async (body)=>{
//     const url = BASE_URL + '/auth/login';
//     try{
//         const response = await axios(url, {
//             method: "POST",
//             data: body,
//             withCredentials: true, // ✅ important if your backend sends cookies
//           });
//     }
//     catch(err){
//         throw new Error(err);
//     }
// }


export const loginAPI = async (body) => {
    const url = BASE_URL + '/auth/login';
    try {
      const response = await axios(url, {
        method: "POST",
        data: body,
        withCredentials: true, // ✅ if using cookies
      });
  
      return response.data; // ✅ This is crucial
    } catch (err) {
      // Optional: better error message
      throw new Error(err.response?.data?.message || "Login failed");
    }
    
  };
// export const forgotPasswordAPI = async (email) => {
//   try {
//     const response = await axios.post('/auth/forgot-password', { email });
//     return response.data; // You can adjust this depending on your backend response
//   } catch (error) {
//     throw error;
//   }
// };
// export const verifyOtpAPI = ({ email, otp, newPassword }) => {
//   return axios.post('/auth/verify-otp', {
//     email,
//     otp,
//     newPassword
//   });
// }


export const forgotPasswordAPI = (email) => {
  return axios.post('http://localhost:8080/auth/forgot-password', { email });
};

// export const verifyOtpAPI = (email, otp, newPassword) => {
//   return axios.post('http://localhost:8080/auth/verify-otp', { email, otp, newPassword });
// };

export const verifyOtpAPI = (data) => {
  return axios.post("http://localhost:8080/auth/verify-otp", data);
};