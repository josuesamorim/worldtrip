import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

export function Banner() {
    return (
        <Flex
            bgImage="url('/Background.svg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition={["100% 20%", "100% 20%", "100% 30"]}
            w="100%"
            h={["163px", "250px", "250px", "368px"]}
        // mb={["50px", "100px"]}

        >
            <Flex

                px={["4", "10", "15", "20", "36"]}
                justify={["center", "space-between"]}
                align="center"
                w="100%"
                mx="auto"

            >
                <div>
                    <Heading
                        fontWeight="500"
                        fontSize={["20px", "36px"]}
                        color="gray.100"
                    >
                        5 Continentes, <br /> infinitas possibilidades.

                    </Heading>

                    <Text

                        mt="5"
                        color="gray.300"
                        fontWeight="400"
                        fontSize={["0.8rem", "xl"]}
                        maxWidth={["100%", "100%", "100%", "524px"]}

                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </div>

                <Image
                    w={["300px", "300px", "300px", "430px"]}
                    display={['none', 'none', 'block']}
                    src="/Airplane.svg"
                    alt="yellow airplane"
                    transform="translateY(30%)"
                    ml="8"
                />

            </Flex>

        </Flex>
    )
}