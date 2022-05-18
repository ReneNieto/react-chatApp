import {  HStack, VStack, Flex, Avatar, Text, Spacer, Circle, Box} from '@chakra-ui/react'
import RecievedBubble from '../ChatBubble/ReceivedBubble'


export default function ReceivedChat({message, receiverUser}){




    return(
        <Flex
        w='100%' 
        h='fit-content'
        flexWrap='wrap'
        flexDirection='row'

        >
            <Flex
            borderRadius='24px'
            p={4} 
            width='100%'
            >
                <Avatar
                        name={receiverUser}
                        src='https://bit.ly/broken-link'
                        marginRight='20px'

                        >
                </Avatar>

                <HStack direction='row' spacing={6}>
                    
                    <VStack align='start' >
                        <Text>{receiverUser}</Text>
                        <Text fontSize='sm'> 8:45 AM</Text>
                    </VStack>
                </HStack>
            </Flex>

            <Flex
            borderRadius='24px'
            p={4}
            flexWrap='wrap'
            width='100%'
            align='center'

            >
                
                <RecievedBubble chatMessage={message}/>
                

                
            </Flex>
        </Flex>

    )

}