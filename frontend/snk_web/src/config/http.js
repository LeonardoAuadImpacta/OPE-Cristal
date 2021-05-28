import axios from 'axios';

const client = axios.create({
  baseURL: "https://ope-cristal-backend.herokuapp.com/api/v1/",
  timeout: 3000,
  headers: {
      "Content-Type": "application/json"
    }
});

export default client; 
