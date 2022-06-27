import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

const CustomInput = ({ error, success, errorText, leftIcon, rightIcon }) => {
  const [input, setInput] = useState('');

  return (
    <FormControl isInvalid={error}>
      <InputGroup 
      
      size={'lg'}
      >
        {success ? (
          <InputRightElement
            pointerEvents="none"
            children={
             rightIcon ? rightIcon : <AiFillCheckCircle color="Green" fontSize={24} /> }
          />
        ) : (
          ''
        )}
        {error ? (
          <InputRightElement
            pointerEvents="none"
            children={
              rightIcon ? rightIcon : <AiFillCheckCircle color="Green" fontSize={24} /> }
          />
        ) : (
          ''
        )}
        {leftIcon ? (
          <InputLeftElement
            pointerEvents="none"
            children={
              leftIcon ? leftIcon : '' }
          />
        ) : (
          ''
        )}
        <Input 
        _focus={{ backgroundColor : 'green.100'}}
        _focusVisible ={{borderColor:'green', borderWidth:'2px'}}
       
        id="email" type="email" />
      </InputGroup>

      {!error ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>
          {typeof errorText === 'string' ? errorText : 'Email is required.'}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CustomInput;
