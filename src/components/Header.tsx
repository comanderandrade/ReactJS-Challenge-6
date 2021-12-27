import Link from 'next/link';
import { useRouter } from 'next/router';
import { Flex, Box, Image } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export const Header = (): JSX.Element => {
  const { asPath } = useRouter();

  const isHomePage = asPath === '/';

  return (
    <Flex
      maxWidth="1160px"
      alignItems="center"
      mx="auto"
      px="1rem"
      h="100"
      w="100%"
    >
      {!isHomePage &&
        <Box justifyContent="flex-start" cursor="pointer">
          <Link href="/">
            <ChevronLeftIcon w="20px" h="20px" />
          </Link>
        </Box>}

      <Image margin="0 auto" src="/logo.svg" w="180px" h="40px" alt="Logo" />
    </Flex>
  );
};