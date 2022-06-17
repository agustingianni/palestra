import { HStack, Text, Image } from '@chakra-ui/react';

function ClientCard({ client }) {
    return (
        <HStack>
            <Image
                boxSize="32px"
                backgroundColor="gray.100"
                src={
                    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
                }
                borderRadius="full"
            />
            <Text fontSize={'md'}>
                {client.name + " " + client.lastname}
            </Text>
        </HStack>
    );
}


export default ClientCard