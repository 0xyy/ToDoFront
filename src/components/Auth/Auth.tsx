import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { LoginForm } from '../layout/LoginForm/LoginForm';

export const Auth = () => (
    <Flex position="absolute" top="0" left="0" width="100%" height="100vh" align="center" justify="center" bg="green.900">
        <Box bg="#FFF" p={6} rounded="md" border="1px" mt="20px" mb="20px" w="500px">
            <LoginForm/>
        </Box>
    </Flex>
);