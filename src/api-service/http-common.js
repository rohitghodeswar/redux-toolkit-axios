import axios from "axios";

// creating axios instance
// in future you can introduce interceptors too
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json",
  },
});