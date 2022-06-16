import { Icon, Stack, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { FiAlertTriangle } from 'react-icons/fi'

function NotFound() {
    return (
        <Flex align={'center'} justify={'center'} h={'100vh'} w={'full'}>
            <Stack
                backgroundColor={'gray.50'}
                rounded={'xl'}
                p={8}
                spacing={6}
                maxW={'lg'}
                align={'center'}
                textAlign={'center'}>
                <Icon as={FiAlertTriangle} w={24} h={24} />
                <Stack spacing={2}>
                    <Heading>Page not found</Heading>
                    <Text>
                        This page was not found. You may have mistyped the address or the
                        page may have moved.
                    </Text>
                </Stack>
                <Flex>
                    <Button as={Link} to='/' variant='solid' size={'lg'}>Home</Button>
                </Flex>
            </Stack>
        </Flex>
    );
};

export default NotFound;
