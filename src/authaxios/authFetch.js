import axios from "axios";

const authFetch = axios.create( {
baseURL : "http://localhost:4000"     
})

export default authFetch;


