import { Badge } from "@chakra-ui/react"

const color = {
    regular: "green",
    athlete: "red",
    university: "purple",
    management: "blue"
}

function ClientTypeBadge({ client }) {
    return (
        <Badge colorScheme={color[client.type]}>{client.type}</Badge>
    );
}

export default ClientTypeBadge