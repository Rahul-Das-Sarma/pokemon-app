import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const axiosInstances = axios.create({
  baseURL: baseUrl
});

export default axiosInstances;
