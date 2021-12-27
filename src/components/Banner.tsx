import { Flex, Image, Text, Heading } from '@chakra-ui/react';

export const Banner = (): JSX.Element => {
  return (
    <Flex
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      background="url('banner-background.svg')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        p={[4, 8]}
        justifyContent={["center", "space-around"]}
        px={['4', '10', '15', '20', '36']}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
        >
          <Heading
            color="white"
            fontWeight="normal"
            fontSize={['2l', '2xl', '2xl', '4xl']}
            mb="20px"
          >
            5 Continentes,<br />
            infinitas possibilidades.
          </Heading>

          <Text
            as="p"
            color="gray.300"
            fontSize={['0.8rem', 'xl']}
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>


        <Flex alignContent="flex-end">
          <Image
            w={["300px", "300px", "300px", "430px"]}
            display={["none", "none", "block"]}
            src="airplane.svg" alt="Airplane"
            transform="rotate(3deg) translateY(60px)"
          />

        </Flex>
      </Flex>

    </Flex >
  );
}