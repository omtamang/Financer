import axios from "axios";

export const retriveUsers = (name)  => axios.get(`http://localhost:8080/users/${name}`)

export const getFarmExpense = (id) => axios.get(`http://localhost:8080/users/${id}/farm`)

export const addFarmExp = (farm, id) => axios.post(`http://localhost:8080/addExpense/${id}/farm`, farm)