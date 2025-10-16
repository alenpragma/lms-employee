import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const employeeId = Cookies.get("employeeId");
    if (employeeId) {
      config.headers["x-employee-id"] = employeeId;
    }
  }
  console.log(config);
  return config;
});

export default api;
