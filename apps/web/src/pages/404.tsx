import React from 'react';
import { Link } from '@chakra-ui/react';
import { Headline, InfoText } from '../components';
import NextLink from 'next/link';
import { Index } from '../Routes';

const NotFound: React.FC = () => {
  return (
    <>
      <Headline>Page not found</Headline>
      <InfoText textAlign="center">
        Requested page was not found,{' '}
        <NextLink href={Index}>
          <Link color="red.500">back to the home page? </Link>
        </NextLink>
      </InfoText>
    </>
  );
};

export default NotFound;
