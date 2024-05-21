import axios from "axios";

export const registration = (data) => {
    return axios.post('localhost:8080/api/auth/signup',data)
      .then((json) => json)
      .catch((error) => Promise.reject(error));
  };