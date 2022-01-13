import axios from "axios"
const URL = 'http://localhost:9191'
export default {
    async create(data) {
        const response = await axios.post(`${URL}/section`, data)
        return response
    },
    async getAll() {
        const response = await axios.get(`${URL}/section`)
        return response 
    }
}