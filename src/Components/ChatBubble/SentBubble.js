import { VStack, Text, Box} from '@chakra-ui/react'


export default function SentBubble({chatMessage}){


    return(
        <VStack justify='start' align='end' width='100%'>
            <Box 
            p={4}
            borderBottomRadius='24px'
            borderTopLeftRadius='24px'
            bg='#c070ff'
            width='fit-content'
            mb='20px'
            >
                <Text >{chatMessage}</Text> 
            </Box>
        </VStack>


    )


}