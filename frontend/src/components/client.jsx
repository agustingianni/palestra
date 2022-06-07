import ClientsService from "../service/clients"
import { useQuery } from "react-query";

function ClientList() {
    const { isLoading, isError, data, error } = useQuery("clients", () =>
        ClientsService.list()
    )

    if (isLoading)
        return <p>Loading data ...</p>

    if (isError)
        return <p>{`Error fetching clients: ${error.message}`}</p>

    return (
        <table className="client-table">
            <tbody>
                <tr className="client-table-header">
                    <th>Name</th>
                    <th>Last</th>
                    <th>Type</th>
                    <th>Subscription</th>
                </tr>
                {
                    data.map((client) =>
                        <tr key={client._id} className='client-table-row'>
                            <td>{client.name}</td>
                            <td>{client.lastname}</td>
                            <td>{client.type}</td>
                            <td>{client.subscription}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default ClientList