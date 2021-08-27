import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import  { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function SwiperContents() {
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
                        bgImage="url('/Europe.svg')"
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
                                    Europa
                                </Heading>

                                <Text
                                    fontWeight="700"
                                    fontSize={["14px", "24px"]}
                                    mt={["1", "3"]}
                                >
                                    Europa o continente mais antigo
                                </Text>
                            </a>
                        </Link>

                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        bgImage="url('/Europe.svg')"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        w="100%"
                        h="100%"
                        align="center"
                        justifyContent="center"
                        direction="column"
                        textAlign="center"

                    >
                        <Link href="/continent/europe" >
                            <a>
                                <Heading
                                    fontWeight="700"
                                    fontSize={["24px", "48px"]}
                                >
                                    America
                                </Heading>

                                <Text
                                    fontWeight="700"
                                    fontSize={["14px", "24px"]}
                                    mt={["1", "3"]}
                                    
                                >
                                    O continente mais novo
                                </Text>
                            </a>
                        </Link>

                    </Flex>
                </SwiperSlide>

            </Swiper>
        </Flex>
    )
}