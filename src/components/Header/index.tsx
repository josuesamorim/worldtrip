import { Flex, Grid, GridItem, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/Ri'



export function Header() {

    const { asPath } = useRouter();
    const isHomePage = asPath != '/';

    return (
        <Flex
            as="header" bg="gray.100" w="100%" h={["50px", "100px"]} mx="auto" py="1rem" align="center" justify="center" >
            <Grid
                h="100%"
                w="100%"
                maxWidth="1160px"
                mx="auto"
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
            >
                {isHomePage ?
                    <Link href="/">
                        <a>
                            <Icon as={RiArrowLeftSLine} gridColumn="1" fontSize={["20", "40"]} />
                        </a>
                    </Link>
                    : ""}
                <Image src="/Logo.svg" alt="logo" w={["81px", "184px"]} justifySelf="center" gridColumn="2" />

            </Grid>
        </Flex>
    )
}