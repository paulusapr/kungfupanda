import axios from "axios";

export async function get(url: string) {
  return axios.get(`${process.env.API_BASE_URL}/${url}`, { headers: { 'Content-Type': 'application/json' } });
};
