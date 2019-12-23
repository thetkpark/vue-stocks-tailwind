import axios from "axios";

const instance = axios.create({
  baseURL: "https://stockserver.azurewebsites.net"
  // baseURL: 'http://localhost:3050'
});

export default instance;
