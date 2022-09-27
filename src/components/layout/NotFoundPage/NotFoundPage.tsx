import React from 'react';
import { Flex, Link, Text, VStack } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const NotFoundPage = () => {
    return <Flex w="100%" h="100vh" justify="center" align="center" bg="green.900">
        <VStack bg="#FFF" p={6} rounded="md" border="1px" mt="20px" mb="20px">
            <Text fontSize="42px">Sorry, we couldn't find the page that you are looking for.</Text>
            <Text>
                <Link as={ReachLink} to="/" color="black.600" fontSize="20px">Go back to the login page.</Link>
            </Text>
        </VStack>
    </Flex>;
};
