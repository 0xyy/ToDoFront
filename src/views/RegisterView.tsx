import React from 'react';
import { RegisterForm } from '../components/layout/RegisterFrom/RegisterForm';
import { Box, Flex } from '@chakra-ui/react';

export const RegisterView = () => (
    <Flex position="absolute" top="0" left="0" width="100%" height="100vh" align="center" justify="center" bg="green.900">
        <Box bg="#FFF" p={6} rounded="md" border="1px" mt="20px" mb="20px" w="500px">
            <RegisterForm/>
        </Box>
    </Flex>
);