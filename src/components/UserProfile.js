import {
  Avatar,
  Box,
  CircularProgress,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CustomBtn from './CustomBtn';

const UserProfile = () => {
  return (
    <Box pt={'15px'} boxShadow='md' borderRadius={'10px'} bg="white" h="200px" w={'320px'}>
      <SimpleGrid w="240px" columns={2} spacing={'15px'}>
        <Box w={'100px'} position={'relative'} mt="10px" ml="14px">
          <CircularProgress
            stroke="green"
            position={'absolute'}
            color="#8EC03F"
            value={80}
            size="90px"
            thickness="4px"
          />
          <Avatar
            top={'13px'}
            left="13px"
            position={'absolute'}
            size="lg"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </Box>

        <Box mt={'30px'}>
          <Box>
            <Text fontSize={'16px'} color="#6F798B" fontWeight="700">
              Alex Martin
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight="400"
              color={'rgba(111, 121, 139, 0.6)'}
            >
              Network Owner
            </Text>
          </Box>
          <SimpleGrid mt={'18px'} columns={3} spacing={'15px'}>
            <Image src="lock.png" />
            <Image src="user.png" />
            <Image src="settings.png" />
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      <SimpleGrid mx={'24px'} mt="18px" columns={2}>
        <Box>
          <CustomBtn   text="Edit Profile" leftIcon={<Image src="edit.png" />} />
        </Box>
        <Box>
          <CustomBtn text="Logout" leftIcon={<Image src="signout.png" />} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default UserProfile;
