import { Button, Flex, Text, Heading, Avatar } from '@chakra-ui/react';
import { FiHome, FiTool, FiHelpCircle, FiList, FiLogOut, FiDollarSign } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import { useUser } from '../hooks/auth';

function MainContainer({ children }) {
    const { user } = useUser()

    return <Flex h='100vh' flexDir='row'>
        {/* Navigation column */}
        <Flex flexDir='column' w='25%' alignItems='center' backgroundColor='blackAlpha.100' justifyContent='space-between'>
            <Flex flexDir='column'>
                {/* Application title */}
                <Heading p='10' letterSpacing='tight'>
                    Management
                </Heading>

                {/* Navigation bar */}
                <Flex flexDir='column' p='10' alignItems='start'>
                    <Button as={Link} to='/' leftIcon={<FiHome />} variant='ghost'>Home</Button>
                    <Button as={Link} to='/clients' leftIcon={<FiList />} variant='ghost'>Clients</Button>
                    <Button as={Link} to='/payments' leftIcon={<FiDollarSign />} variant='ghost'>Payments</Button>
                    <Button as={Link} to='/settings' leftIcon={<FiTool />} variant='ghost'>Settings</Button>
                    <Button as={Link} to='/help' leftIcon={<FiHelpCircle />} variant='ghost'>Help</Button>
                </Flex>
            </Flex>

            {/* User information */}
            <Flex flexDir='column' p='10' alignItems='center'>
                <Avatar />
                <Text>{user.name}</Text>
                <Button as={Link} to='/logout' leftIcon={<FiLogOut />} variant='ghost'>Logout</Button>
            </Flex>

        </Flex>

        {/* Contents column */}
        <Flex flexDir='column' p='10' w='75%'>
            {children}
        </Flex>
    </Flex>
}

export default MainContainer