import { useState } from 'react';
import { FiEdit } from 'react-icons/fi'
import { HStack, Button, TableContainer, Table, Tr, Td, Th, Thead, Tbody } from '@chakra-ui/react'

import ClientViewModal from './ClientViewModal'
import ClientEditModal from './ClientEditModal'


import ClientTypeBadge from './ClientTypeBadge'
import ClientCard from './ClientCard'
import ClientStatusBadge from './ClientStatusBadge'

function ClientTable({ clients }) {
    const [selectedClient, setSelectedClient] = useState(null)

    const onClientViewClicked = (client) => {
        setSelectedClient(client)
    }

    const rows = clients.map((client) =>
        <Tr key={client._id} onClick={() => { onClientViewClicked(client) }}>
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
                <Button leftIcon={<FiEdit />} variant='ghost' />
            </Td>
        </Tr>
    )

    return (
        <>
            <HStack>
                <ClientViewModal client={selectedClient} />
                <ClientEditModal client={selectedClient} />
                <ClientCreateModal />
            </HStack>

            <TableContainer width={"100%"}>
                <Table size='md'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Role</Th>
                            <Th>Edit</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {rows}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ClientTable