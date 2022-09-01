import React from 'react';
import { Box, Text, Button, Center, Flex, FormControl, FormErrorMessage, Input, Link, Stack, VStack } from '@chakra-ui/react';

export const Login = () => {
    return <Flex bg="green.900" h="100vh" justifyContent="center" alignItems="center">
        <Box w='300px' h='200px' bg="#FFF" p='5'>
            <Text fontSize='32px' mb='4'>Log In</Text>
            <form>
                <VStack spacing={4} align="flex-start">
                    <FormControl>
                        <Input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            bgColor="#FFF"
                            color="green.600"
                        />
                    </FormControl>
                </VStack>
                <VStack spacing={4} align="flex-start">
                    <FormControl>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            bgColor="#FFF"
                            color="green.600"
                        />
                    </FormControl>
                </VStack>
            </form>
        </Box>
    </Flex>;
};