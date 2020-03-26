import { create } from "apisauce";

const api = create({
  baseURL: "https://api.openweathermap.org/data/2.5/"
});
export default api;
