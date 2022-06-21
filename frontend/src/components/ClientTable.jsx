import { FiEye, FiEdit } from 'react-icons/fi'
import { Button, TableContainer, Table, Tr, Td, Th, Thead, Tbody } from '@chakra-ui/react'

import ClientTypeBadge from './ClientTypeBadge'
import ClientCard from './ClientCard'
import ClientStatusBadge from './ClientStatusBadge'

function ClientTable({ clients, onClientEvent }) {
    const rows = clients.map((client) =>
        <Tr key={client._id}>
            <Td>
                <ClientCard client={client} />
            </Td>

            <Td>
                <ClientStatusBadge client={client} />
            </Td>

            <Td>
                <ClientTypeBadge client={client} />
            </Td>

            <Td>
                <Button
                    onClick={() => { onClientEvent("view", client) }}
                    leftIcon={<FiEye />}
                    variant='ghost'
                />

                <Button
                    onClick={() => { onClientEvent("edit", client) }}
                    leftIcon={<FiEdit />}
                    variant='ghost'
                />
            </Td>
        </Tr>
    )

    return (
        <TableContainer width={"100%"}>
            <Table size='md'>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Status</Th>
                        <Th>Role</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {rows}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default ClientTable