import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(resp => resp.data)
}

const create = newObject => {
    return axios
        .post(baseUrl, newObject)
        .then(resp => resp.data)
}

export default { getAll, create }
