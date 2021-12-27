import Link from 'next/link';
import { Flex, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Continent } from '../pages/continents/@types';

type CarrousselProps = {
  continents: Continent[]
};

SwiperCore.use([Navigation, Pagination]);

export const Carroussel = ({ continents }: CarrousselProps): JSX.Element => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        scrollbar={{ draggable: true }}
        style={{ width: '100%', flex: '1', borderRadius: 20 }}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Flex
              w="100%"
              h="100%"
              alignItems="center"
              justify="center"
              direction="column"
              bgImage={`url('${continent.image}')`}
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={continent.link}>
                <Heading
                  color="white"
                  fontSize={["3xl", "4xl", "4xl"]}
                  cursor="pointer"
                >
                  {continent.name}
                </Heading>
              </Link>
              <Heading
                color="white"
                fontWeight="semibold"
                fontSize={["0.8rem", "1xl", "2xl"]}
                mt={["2", "4"]}
              >
                {continent.description}
              </Heading>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}