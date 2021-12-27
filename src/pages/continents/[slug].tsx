import { GetStaticPaths, GetStaticProps } from "next";
import { Flex, Heading } from '@chakra-ui/react';
import { City, Continent as ContinentType } from "./@types";
import api from "../../services/api";
import { Details } from "../../components/continent/Details";
import { Cities } from "../../components/continent/ Cities";


type ContinentProps = {
  continent: ContinentType;
  cities: City[];
}

export default function Continent({ continent, cities }: ContinentProps): JSX.Element {
  return (
    <Flex direction="column">
      <Flex
        w="100%"
        h={["150px", "300px", "500px"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        bgImage={`url(/${continent.image})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
      >
        <Heading
          textAlign={["center", "left"]}
          color="white"
          fontSize={["1.75rem", "5xl"]}
          fontWeight="medium"
        >
          {continent.name}
        </Heading>
      </Flex>

      <Flex direction="column" maxWidth="1160px" mx="auto" mb="10" px="1rem">
        <Details
          description={continent.full_description}
          cities={continent.cities}
          countries={continent.countries}
          languages={continent.languages}
        />

        <Cities cities={cities} />
      </Flex>
    </Flex>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const { data } = await api.get(`/continents?slug=${slug}`);
  console.log(data)
  const { data: cities } = await api.get(`/continents/${data[0].id}/cities`);

  return {
    props: {
      continent: data[0],
      cities: cities,
    },
    revalidate: 60 * 60 * 24 // 24 HOURS
  }
};