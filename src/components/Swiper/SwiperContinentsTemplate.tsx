import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';



interface SwiperContinentsProps {
    continentImage: string;
    continentHeading: string;
    continentDescription: string;
}

export function SwiperContinentsTemplate({ continentImage, continentHeading, continentDescription }: SwiperContinentsProps) {
    return (
        <Flex w="100%" maxW="1240px" mx="auto" mb={["5", "10"]} h={["250px", "450px"]} >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                style={{width: '100%', flex: '1'}}

            >
                <SwiperSlide>
                    <Flex
                        bgImage={`/${continentImage}.svg`}
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        w="100%"
                        h="100%"
                        align="center"
                        justifyContent="center"
                        direction="column"
                        textAlign="center"

                    >
                        <Link href="/continent/europe">
                            <a>
                                <Heading
                                    fontWeight="700"
                                    fontSize={["24px", "48px"]}
                                >
                                    {continentHeading}
                                </Heading>

                                <Text
                                    fontWeight="700"
                                    fontSize={["14px", "24px"]}
                                    mt={["1", "3"]}
                                >
                                    {continentDescription}
                                </Text>
                            </a>
                        </Link>

                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}