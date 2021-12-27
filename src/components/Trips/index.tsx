import { Grid, GridItem, Box } from '@chakra-ui/react';

import { TripItem } from './TripItem';

export const Trips = (): JSX.Element => {
  return (
    <>
      <Grid
        mt={['10', '32']}
        mx="auto"
        maxWidth="1160px"
        align="center"
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
        gap={[1, 5]}
      >
        <GridItem>
          <TripItem label="vida noturna" imageSrc="cocktail.svg" />
        </GridItem>
        <GridItem>
          <TripItem label="praia" imageSrc="surf.svg" />
        </GridItem>
        <GridItem>
          <TripItem label="moderno" imageSrc="building.svg" />
        </GridItem>
        <GridItem>
          <TripItem label="clássico" imageSrc="museum.svg" />
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
          <TripItem label="e mais..." imageSrc="earth.svg" />
        </GridItem>
      </Grid>
      <Box w={['60px', '90px']} mx="auto" h="2px" bg="gray" my={['9', '20']} />
    </>
  );
}