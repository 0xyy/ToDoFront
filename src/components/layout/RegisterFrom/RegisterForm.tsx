import React from 'react';
import { Box, Button, FormControl, Input, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const RegisterForm = () => {
    return <Box>
        <Text fontSize='32px' mb='5'>Create your account</Text>
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
                        name="name"
                        type="text"
                        placeholder="Name"
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
                <FormControl>
                    <Input
                        name="repeatedPassword"
                        type="password"
                        placeholder="Repeat your password"
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
                            <Link as={ReachLink} to="/" color="black.600">Back to the login page</Link>
                        </Text>
                        <Button type="submit" colorScheme="green" w="100px">
                            Register
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </form>
    </Box>;
};