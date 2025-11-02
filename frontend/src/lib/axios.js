import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001"   // when running locally
      : "http://backend:5001",    // when running inside Kubernetes
  withCredentials: true,
});
