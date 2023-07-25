import axios from 'axios'
const myaxios = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 1000,
})
myaxios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default myaxios