import axios from "axios";

const yallababyAPI = axios.create({
  baseURL: "https://kabsa.yallababy.com/api/v1",
  headers:{
    secretKey: process.env.REACT_APP_YALLABABY_API_KEY!,
  }
});

export default yallababyAPI;