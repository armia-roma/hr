import axios from "axios";
const URL = 'http://localhost:9191';
export default {
    async create (state){
        const response = await axios.post(`${URL}/state`, state)
        return response
    }
}