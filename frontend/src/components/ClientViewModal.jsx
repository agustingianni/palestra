import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Heading, Text
} from '@chakra-ui/react'

import ClientTypeBadge from './ClientTypeBadge'
import ClientCard from './ClientCard'
import ClientStatusBadge from './ClientStatusBadge'

function ClientViewModal({ client, isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Information</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <ClientCard client={client} />
                    <ClientStatusBadge client={client} />
                    <ClientTypeBadge client={client} />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ClientViewModal