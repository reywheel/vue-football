import axios from "@/api/axios";

const getTeams = () => {
  return axios.get("teams");
};

export default {
  getTeams
};