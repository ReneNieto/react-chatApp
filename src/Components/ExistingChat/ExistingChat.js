import { Stack, HStack, VStack, Flex, Avatar, Text, Spacer, Circle, Alert} from '@chakra-ui/react'

export default function ExistingChat({user, focus}) {



    return(
        <Stack w='100%'  h='50px' pe={4} ps={4} my='20px' >
            <Flex borderRadius='24px'
            p={4}  
            as='button'
            onClick={()=>{
                
                focus(user)
            }}
            _focus={{bg:'blue.500', color:'gray.100'}}
            >
                <HStack direction='row' spacing={6}>
                    <Avatar
                    name={user.name} src='https://bit.ly/broken-link'>
                    </Avatar>
                    <VStack align='start'>
                        <Text>{user.name} </Text>
                        <Text fontSize='sm'> Hello :v</Text>
                    </VStack>

                </HStack>
                <Spacer/>
                <VStack>
                    <Text fontSize='sm'>
                        12:50
                    </Text>
                    <Circle bg='red' size='24px'>
                    <Text color='white' fontSize='xs'>2</Text>
                    </Circle>
                </VStack>
            </Flex>
        </Stack>
    )
}