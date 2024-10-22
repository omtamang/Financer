import axios from "axios";

export const retriveUsers = (name)  => axios.get(`http://localhost:8080/users/${name}`)