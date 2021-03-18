import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000/api/v1'

const createCliente = body => {
  return axios.post(
    `${API_ENDPOINT}/cliente`,
    body,
    {
      "Content-Type": "application/json"
    }

  )
}

const getCliente = id => {
  return axios.get(
    `${API_ENDPOINT}/cliente/${id}`
  )
}

export {
  createCliente,
  getCliente,
}
