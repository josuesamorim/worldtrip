import { Flex, Text } from "@chakra-ui/react";

export function ContinentBanner() {
    return (
        <Flex
            bgImage="url('/EuropeContinent.svg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            w="100%"
            h={["150px", "500px"]}
            mb={["24px", "80px"]}
            pt={["0", "0", "72"]}
            px={["0", "0", "36"]}
            align="center"
            justify={["center", "center", "flex-start"]}
        >

            <Text
               
                fontWeight="600"
                fontSize={["28px", "48px"]}
                color="gray.100"
                textAlign={["center","left"]}
            >
                Europa
            </Text>


        </Flex>
    )
}