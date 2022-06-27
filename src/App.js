import { Box, ChakraProvider, Stack, theme } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';
import CustomBtn from './components/CustomBtn';
import CustomInput from './components/CustomInput';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack width={'xl'} direction="row" mt={'4'} ml={'12'}>
        <CustomBtn
          text="done"
          leftIcon={<FaEnvelope />}
          done
        />
        <CustomInput leftIcon={<FaEnvelope/>}   errorText={'please enter a valid email address'}/>
      </Stack>
      <Box ml={'50px'} mt={'50px'}>
      <UserProfile/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
