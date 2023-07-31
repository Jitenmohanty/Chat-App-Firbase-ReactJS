import { Box, Container, VStack, Button, Input, HStack } from '@chakra-ui/react';
import Message from './Components/Message'
function App() {
  return (
    <Box bg="red.50" h>
      <Container h={"100vh"} bg={"White"}>
        <VStack h="full" paddingY={"4"}>
          <Button w={"full"} bg={"red.400"}>Logout</Button>

          <VStack h={"full"} w={"full"} >
            <Message text={"Message send..."} />
            <Message text={"Message send..."} user={'me'}/>
            <Message text={"Message send..."} />
          </VStack>
          <form action="" style={{width:'100%'}}>
            <HStack>
              <Input type='text' placeholder={'Enter your message'} />
              <Button type='submit' bg={"green.300"}>Send</Button>
            </HStack>

          </form>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
