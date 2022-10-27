import React from 'react';
import { NotFoundPage } from '../components/layout/NotFoundPage/NotFoundPage';
import { Box, Flex } from '@chakra-ui/react';

export const NotFoundPageView = () => (
    <Flex position="absolute" top="0" left="0" width="100%" height="100vh" align="center" justify="center" bg="green.900">
        <Box bg="#FFF" p={6} rounded="md" border="1px" mt="20px" mb="20px" w="700px">
            <NotFoundPage/>
        </Box>
    </Flex>
);