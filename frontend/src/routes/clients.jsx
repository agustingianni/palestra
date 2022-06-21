import { useState } from 'react'
import { useDisclosure, Flex, InputGroup, InputLeftElement, Container, Alert, AlertIcon, AlertTitle, AlertDescription, Progress, Text, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { FiSearch, FiPlusCircle } from 'react-icons/fi'
import { useClientQuery } from '../hooks/clients'
import ClientTable from '../components/ClientTable'
import MainContainer from '../components/MainContainer'
import ClientCreateModal from '../components/ClientCreateModal'

function ClientsPage() {
    // Client create modal operations.
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                    <Button onClick={onOpen} leftIcon={<FiPlusCircle />}>New</Button>

                    <InputGroup>
                        <InputLeftElement pointerEvents='none' children={<FiSearch />} />
                        <Input value={query} onChange={onQueryStringChange} placeholder='Search' />
                    </InputGroup>
                </Flex>
            </Flex>

            <Flex w="100%" alignItems='center'>
                <ClientTable clients={results} />
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
        <ClientCreateModal isOpen={isOpen} onClose={onClose} />
        <MainContainer contents={contents} />
    </>
}

export default ClientsPage