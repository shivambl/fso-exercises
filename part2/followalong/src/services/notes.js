import axios from "axios"
const baseUrl = "http://localhost:3001/notes"

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(resp => resp.data)
}

const create = newObject => {
    const req = axios.post(baseUrl, newObject)
    return req.then(resp => resp.data)
}

const update = (id, newObject) => {
    const req = axios.put(`${baseUrl}/${id}`, newObject)
    return req.then(resp => resp.data)
}

export default { getAll, create, update }
