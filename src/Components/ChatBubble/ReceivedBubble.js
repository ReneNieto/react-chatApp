import { VStack, Text, Box} from '@chakra-ui/react'


export default function RecievedBubble({chatMessage}){


    return(
        <VStack justify='start' align='start' width='100%'>
            <Box 
            p={4}
            borderBottomRadius='24px'
            borderTopRightRadius='24px'
            bg='white'
            width='fit-content'
            mb='20px'
            >
                <Text >{chatMessage}</Text> 
            </Box>
        </VStack>


    )


}