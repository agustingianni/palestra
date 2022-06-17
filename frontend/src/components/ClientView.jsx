import { Image, Container, Center, VStack, Text, Heading, HStack, Tag } from '@chakra-ui/react';
function ClientView({ client }) {
    return (
        <Container>
            <Image
                src={client.photo}
                boxSize="120px"
                borderRadius="full"
                fallbackSrc="https://res.cloudinary.com/dsabyte/image/upload/v1630411853/users/user-svgrepo-com_vdq4rw.svg"
                mx="auto"
            />
            <Center>
                <VStack>
                    <Heading>{`${client.name} ${client.lastname}`}</Heading>
                    <Text color="gray">
                        {client.start_date}
                    </Text>
                    <Text>
                        {client.subscription}
                    </Text>
                    <Text>
                        {client.notes}
                    </Text>

                    <HStack>
                        <Tag colorScheme="blue">
                            {client.type}
                        </Tag>
                    </HStack>
                </VStack>
            </Center>
        </Container>
    )
}
// https://mobile.twitter.com/agustingianni


export default ClientView