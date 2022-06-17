import { useQuery } from 'react-query';

import axios from 'axios'

export default function useClients() {
    return useQuery('clients', () =>
        axios.get("/api/clients").then(res => res.data)
    )
}