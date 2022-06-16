import { useQuery } from 'react-query';
import { Container, Alert, AlertIcon, AlertTitle, AlertDescription, Progress, Button, Flex, Text, Heading, Avatar } from '@chakra-ui/react';

import ClientTable from '../components/ClientTable'
import MainContainer from '../components/MainContainer'
import ClientsService from '../service/clients'


function HomePage() {
    const { isLoading, isError, data, error } = useQuery('clients', () =>
        ClientsService.list()
    )

    if (isLoading) {
        const contents = (
            < Container >
                <Text>Loading clients ...</Text>
                <Progress isIndeterminate />
            </Container >
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

    const contents = <>
        <Heading letterSpacing='tight' mb={20}>
            Main
        </Heading>
        <h1>Contents</h1>
    </>

    return <MainContainer contents={contents} />
}

export default HomePage