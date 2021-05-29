import axios from 'axios';

const client = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL || "http://localhost:3000/api/v1/",
  timeout: 3000,
  headers: {
      "Content-Type": "application/json"
    }
});

export default client; 
