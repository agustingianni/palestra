import { useMutation, useQuery, useQueryClient } from 'react-query';

import axios from 'axios'

// TODO(goose): move these into some kind of API.
const get_clients = () => axios.get("/api/clients").then(res => res.data)
const create_client = (client) => axios.post("/api/clients", client)

const CLIENTS_QUERY_KEY = 'clients-key'

export function useClientQuery() {
    return useQuery(CLIENTS_QUERY_KEY, get_clients)
}

export function useClientMutation() {
    const queryClient = useQueryClient()

    return useMutation(create_client, {
        onSuccess: () => queryClient.invalidateQueries(CLIENTS_QUERY_KEY)
    })
}