import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1";

export default axios.create({
  baseURL: BASE_URL,
  method: "GET",
  params: {
    key: import.meta.env.VITE_APP_APIKEY,
  },
});
