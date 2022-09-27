import axios from "axios";
const produtionServer = "http://vapittransportes.com.br/api/v1/";
const devServer = "http://vapit.herokuapp.com/api/v1/";
const api = axios.create({
  baseURL: produtionServer,
});

export default api;
