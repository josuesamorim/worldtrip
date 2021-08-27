import { Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { SwiperContents } from "../components/Swiper/SwiperContents";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />

      <Heading
        textAlign="center"
        fontWeight="500"
        fontSize={["lg", "3xl", "4xl"]}
        color="gray.700"
        mb={["5", "14"]}
      >
        Vamos nessa? <br /> Então escolha seu continente.
      </Heading>

    <SwiperContents />
    
    </Flex>
  )
}
