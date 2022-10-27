import React from 'react';
import { Link, Text } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const NotFoundPage = () => {
    return <>
        <Text fontSize="42px">Sorry, we couldn't find the page that you are looking for.</Text>
        <Text mt="20px">
            <Link as={ReachLink} to="/" color="black.600" fontSize="20px">Go back to the login page.</Link>
        </Text>
    </>
};
