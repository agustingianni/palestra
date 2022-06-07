import axios from 'axios'

// Register user
const list = async () => {
    const response = await axios.get("/api/clients")
    return response.data
}


const ClientsService = {
    list,
}

export default ClientsService