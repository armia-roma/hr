import axios from 'axios'
const URL = "http://localhost:9191"
export default {
    async create(department) {
        const response = await axios.post(`${URL}/department`, department)
        return response
    },
    async findByCode(name) {
        const response = await axios.get(`${URL}/department`, {
            params: {
                name: name
            }
        })
        return response
    },
    async findDepartment(id) {
        const response = await axios.get(`${URL}/department/${id}`)
        return response 
    },
    async getDeparments() {
        const response = await axios.get(`${URL}/department`);
        return response
    },
    async update(id, data) {
        const response = await axios.put(`${URL}/department/${id}`,{data})
        return response
    }
}