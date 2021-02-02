import axios from "@/api/axios";

const getLeagues = () => {
  return axios.get("competitions").then(response => response.data.competitions);
};

export default {
  getLeagues
};
