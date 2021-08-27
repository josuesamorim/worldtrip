import { Box, Flex, Grid, GridItem, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypesOptionsProps {
    image: string;
    children: string;
}


export function TravelTypesOptions({ image, children }: TravelTypesOptionsProps) {

    const isMobile = useBreakpointValue({
        base: false,
        sm: true,
    })

    return (
        <Flex
            direction={["row", "column"]}
            mx="auto"
            justify="space-between"
            w="100%"
            maxWidth="1160px"
            align="center"
        >

            {isMobile ?
                <Box align="center">
                    <Image
                        src={`/TravelTypes/${image}`}
                        h="85px"
                        w="85px"
                        alignItems="center"
                        mb="6"
                    />

                    <Text fontWeight="600"
                        fontSize={["18px", "24px"]}
                        lineHeight={["27px", "36px"]}
                        textAlign="center"
                        mt="24px"
                    >
                        {children}
                    </Text>
                </Box>
                :
                <Flex
                    align="center"
                    mx="auto">
                    <Text color="yellow.400"
                        fontSize="4xl"
                        textAlign="center"
                    >
                        •
                    </Text>

                    <Text ml="2"
                        textAlign="center"
                        fontSize={["md", "xl", "2xl"]}
                        fontWeight="600"
                    >
                        {children}
                    </Text>
                </Flex>


            }

        </Flex>

    )
}