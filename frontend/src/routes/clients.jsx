import { useState } from 'react'
import { useDisclosure, Flex, InputGroup, InputLeftElement, Container, Alert, AlertIcon, AlertTitle, AlertDescription, Progress, Text, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { FiSearch, FiPlusCircle } from 'react-icons/fi'
import { useClientQuery } from '../hooks/clients'
import ClientTable from '../components/ClientTable'
import MainContainer from '../components/MainContainer'
import ClientCreateModal from '../components/ClientCreateModal'
import ClientViewModal from '../components/ClientViewModal'
import ClientEditModal from '../components/ClientEditModal'

function ClientsPage() {
    const [currentClient, setCurrentClient] = useState(null)

    // Client modals.
    const createClientModal = useDisclosure()
    const viewClientModal = useDisclosure()
    const editClientModal = useDisclosure()

    const onClientEvent = (event, client) => {
        switch (event) {
            case "create":
                createClientModal.onOpen()
                break

            case "view":
                setCurrentClient(client)
                viewClientModal.onOpen()
                break

            case "edit":
                setCurrentClient(client)
                editClientModal.onOpen()
                break

            default:
                throw new Error("Unknown client event")
        }
    }

    // Search query string.
    const [query, setQuery] = useState('')
    const onQueryStringChange = (event) => setQuery(event.target.value)
    const queryFilter = (client) => {
        return client.name.toLowerCase().includes(query) ||
            client.lastname.toLowerCase().includes(query)
    }

    // Client data.
    const { isLoading, isError, data: clients, error } = useClientQuery()
    if (isLoading) {
        const contents = (
            <Container>
                <Text>Loading clients ...</Text>
                <Progress isIndeterminate />
            </Container>
        )

        return <MainContainer contents={contents} />
    }

    if (isError) {
        const contents = (
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Could not get clients!</AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
            </Alert>
        )

        return <MainContainer contents={contents} />
    }

    const results = query ? clients.filter(queryFilter) : clients

    const contents =
        <VStack>
            <Flex w="100%" alignItems='center' justifyContent="space-between">
                <Flex>
                    <Heading letterSpacing='tight'>
                        Clients
                    </Heading>
                </Flex>
                <Flex>
                    <Button
                        onClick={() => onClientEvent("create")}
                        leftIcon={<FiPlusCircle />}>
                        New
                    </Button>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<FiSearch />}
                        />

                        <Input
                            value={query}
                            onChange={onQueryStringChange}
                            placeholder='Search'
                        />
                    </InputGroup>
                </Flex>
            </Flex>

            <Flex w="100%" alignItems='center'>
                <ClientTable
                    clients={results}
                    onClientEvent={onClientEvent}
                />
            </Flex>

            <Flex w="100%" alignItems='center' justifyContent="space-between">
                <Flex>
                    <Text>Showing page {1} of {Math.ceil(clients.length / 10)}</Text>
                </Flex>

                <Flex>
                    <Button>Previous</Button>
                    <Button>Next</Button>
                </Flex>
            </Flex>
        </VStack>

    return <>
        <ClientCreateModal
            isOpen={createClientModal.isOpen}
            onClose={createClientModal.onClose}
        />

        <ClientViewModal
            isOpen={viewClientModal.isOpen}
            onClose={viewClientModal.onClose}
            client={currentClient}
        />

        <ClientEditModal
            isOpen={editClientModal.isOpen}
            onClose={editClientModal.onClose}
            client={currentClient}
        />

        <MainContainer
            contents={contents}
        />
    </>
}

export default ClientsPage