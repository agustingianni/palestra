import { Heading } from '@chakra-ui/react';

import MainContainer from '../components/MainContainer'

function SettingsPage() {
    const contents = <>
        <Heading letterSpacing='tight' mb={20}>
            Settings
        </Heading>
        <h1>Contents</h1>
    </>

    return <MainContainer contents={contents} />
}

export default SettingsPage