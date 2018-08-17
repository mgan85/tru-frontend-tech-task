import axios from "axios"

const axiosMeasures = axios.create({baseURL: 'http://localhost:3001'});

export default axiosMeasures;

