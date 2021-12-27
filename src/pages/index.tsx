import { GetStaticProps } from 'next';
import { Heading, Flex } from '@chakra-ui/react';

import { Trips } from '../components/Trips';
import { Banner } from '../components/Banner';
import api from '../services/api';
import { Continent } from './continents/@types';
import { Carroussel } from '../components/Carroussel';

type HomeProps = {
  continents: Continent[]
};

function Home({ continents }: HomeProps) {
  return (
    <>
      <Banner />
      <Trips />
      <main>
        <Heading
          fontWeight="500"
          textAlign="center"
          fontSize={["lg", "3xl", "4xl"]}
          mb={["5", "14"]}
        >
          Vamos nessa?<br />
          Então escolha seu continente
        </Heading>
        <Flex
          width="100%"
          maxWidth="1240px"
          mx="auto"
          mb={["5", "10"]}
          paddingX={["2"]}
          h={["250px", "450px"]}
        >
          <Carroussel continents={continents} />
        </Flex>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/continents');

  return {
    props: {
      continents: data
    }
  }
};

export default Home;
