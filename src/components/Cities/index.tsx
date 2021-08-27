import { Grid, Heading } from "@chakra-ui/react";
import { CitiesTemplate } from "./CitiesTemplate";

export function Cities() {
    return (
        <>
            <Heading
                fontWeight="500"
                fontSize={["24px", "36px"]}
                mb="10"
            >
                Cidades +100
            </Heading>

            <Grid
                templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={["20px", "45px"]}
                alignItems="center"
                justifyContent="center"
                px={["30px", "0"]}
            >

                <CitiesTemplate />
                <CitiesTemplate />
                <CitiesTemplate />
                <CitiesTemplate />
                <CitiesTemplate />

            </Grid>

        </>
    )
}