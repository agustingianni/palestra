import { Badge } from "@chakra-ui/react"

const color = {
    active: "green",
    expired: "red"
}

function ClientTypeBadge({ client }) {
    client = {
        status: "active"
    }

    return (
        <Badge colorScheme={color[client.status]}>{client.status}</Badge>
    );
}

export default ClientTypeBadge