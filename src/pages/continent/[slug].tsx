import { Flex } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Cities } from "../../components/Cities";


export default function Continent() {
    return (
        <Flex direction="column">
            <Header />
            <ContinentBanner />

            <Flex direction="column" mx="auto" mb="10" maxWidth="1160px" px="1rem">
            <Content />
            <Cities />
            </Flex>

        </Flex>
    )
}