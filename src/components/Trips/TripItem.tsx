import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

type TripItemProps = {
  label: string;
  imageSrc: string;
}

export const TripItem = ({ label, imageSrc }: TripItemProps): JSX.Element => {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
  });
  return (
    <Flex
      flexDirection={["row", "column"]}
      alignItems="center"
      justify="center"
    >
      <Image
        src={imageSrc}
        alt={label} mb="6"
        w={isMobile ? "48px" : "90px"}
        h={isMobile ? "48px" : "90px"}
      />
      <Text fontWeight="600" fontSize={['md', 'xl']}>
        {label}
      </Text>
    </Flex>
  );
};