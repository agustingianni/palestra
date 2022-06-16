import { Heading } from '@chakra-ui/react';

import MainContainer from '../components/MainContainer'

function HomePage() {
    const contents = <>
        <Heading letterSpacing='tight' mb={20}>
            Main
        </Heading>
        <h1>Contents</h1>
    </>

    return <MainContainer contents={contents} />
}

export default HomePage