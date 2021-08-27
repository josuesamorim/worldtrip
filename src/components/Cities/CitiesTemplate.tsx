import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function CitiesTemplate(){
    return(
        <Box borderRadius="4px" overflow="hidden" maxWidth="256px" >
            <Image src="/london.svg"  h="170px"  />
            <Flex justify="space-between" align="center" bg="white" border="1px" borderColor="yellow.300" borderTop="0px" p="6" >
            <Flex direction="column">
            <Heading fontWeight="600" fontSize="xl" color="gray.700" mt="4" >Londres</Heading>
            <Text fontWeight="500" fontSize="md" color="gray.500" mt="4" mb="4" >Reino Unido</Text>
            </Flex>
            <Image src="/ukflag.svg" height="30px" width="30px" my="auto" borderRadius="50%" objectfit="cover" />
            </Flex>
        </Box>
    )
}