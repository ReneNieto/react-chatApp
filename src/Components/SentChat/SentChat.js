import { useEffect, useState } from 'react'
import ky from 'ky'

import { Stack, HStack, VStack, Flex, Avatar, Text, Spacer, Circle, Box} from '@chakra-ui/react'
import SentBubble from '../ChatBubble/SentBubble'

export default function SentChat({senderUser,message}){


    return(

        <Flex
        w='100%' 
        h='fit-content'
        flexWrap='wrap'
        flexDirection='row'
        >
            <Flex
            ml='auto'
            borderRadius='24px'
            p={4} 
            width='100%'
            justifyContent='flex-end'
            >
               

                <HStack direction='row' spacing={6}>
                    <VStack align='end'>
                        <Text>{senderUser}</Text>
                        <Text fontSize='sm'> 8:45 AM</Text>
                    </VStack>
                </HStack>
                <Avatar
                        name={senderUser}
                        src='https://bit.ly/broken-link'
                        marginLeft='20px'
                        >
                </Avatar>
            </Flex>
            <Flex
            borderRadius='24px'
            p={4}
            align='left'
            flexWrap='wrap'
            width='100%'
            >
               
                <SentBubble chatMessage={message}/>

            </Flex>
        </Flex>

    )

}