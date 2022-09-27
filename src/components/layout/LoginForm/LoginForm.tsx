import React from 'react';
import {
    Box,
    Text,
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    Link,
    Stack,
    VStack
} from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom";

export const LoginForm = () => {
    return <Box>
        <Text fontSize='32px' mb='5'>Login to the TODOAPP</Text>
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
                <FormControl>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        bgColor="#FFF"
                        color="green.600"
                    />
                </FormControl>
                <Stack width="100%" pt="10px">
                    <Stack
                        direction={{base: 'column', sm: 'row'}}
                        align={'center'}
                        justify={'space-between'}
                    >
                        <Text>
                            <Link as={ReachLink} to="/register" color="black.600">Don't have an account? Register here!</Link>
                        </Text>
                        <Button type="submit" colorScheme="green" w="100px">
                            Log In
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </form>
    </Box>
};