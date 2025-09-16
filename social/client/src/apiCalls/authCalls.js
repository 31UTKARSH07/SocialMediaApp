import axios from "axios";
import { API_BASE_URL } from "./config";
const api = axios.create(
    {
        baseURL : API_BASE_URL,
        withCredentials:true,
    }
)
//route = /api/auth/signup

export const signUpUser = async(userData)=>{
    console.log("Signup payload:", userData);
    try {
        const response = await api.post(`/api/auth/signup`,userData)
        return response.data
    } catch (error) {
        console.error("couldNot signUp ",error)
    }
}