import { Heading, Text } from '@chakra-ui/react';

import MainContainer from '../components/MainContainer'

function HelpPage() {
    const contents = <>
        <Heading letterSpacing='tight' mb={20}>
            Help
        </Heading>
        <Text fontSize="xl">For assistance email agustingianni@gmail.com or call +39 333 391 2403</Text>
    </>

    return <MainContainer contents={contents} />
}

export default HelpPage