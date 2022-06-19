import { useState } from 'react'
import { Flex, InputGroup, InputLeftElement, Container, Alert, AlertIcon, AlertTitle, AlertDescription, Progress, Text, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi'
import ClientTable from '../components/ClientTable'
import MainContainer from '../components/MainContainer'
import { useClientQuery } from '../hooks/clients'

function ClientsPage() {
    // Search query string.
    const [query, setQuery] = useState('')
    const onQueryStringChange = (event) => setQuery(event.target.value)
    const my_filter = (client) => {
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

    const results = query ? clients.filter(my_filter) : clients

    const contents =
        <VStack>
            <Flex w="100%" alignItems='center' justifyContent="space-between">
                <Flex>
                    <Heading letterSpacing='tight'>
                        Clients
                    </Heading>
                </Flex>
                <Flex>
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
                    <Text>Showing results {1} to {clients.length} of {clients.length}</Text>
                </Flex>

                <Flex>
                    <Button>Previous</Button>
                    <Button>Next</Button>
                </Flex>
            </Flex>
        </VStack>

    return <MainContainer contents={contents} />
}

export default ClientsPage