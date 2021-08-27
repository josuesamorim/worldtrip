import {  Grid, GridItem, Stack, useBreakpointValue } from "@chakra-ui/react";
import { TravelTypesOptions } from "./TravelTypesOptions";

export function TravelTypes() {
    return (

        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr fr", "repeat(5, 1fr)"]}
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mt={["10", "32"]}
            mx="auto"
            maxWidth="1160px"
            gap={["1", "5"]}
        >
            <GridItem>
                <TravelTypesOptions image="Nightlife.svg">Vida noturna</TravelTypesOptions>
            </GridItem>


            <GridItem>
                <TravelTypesOptions image="Beach.svg">Praia</TravelTypesOptions>
            </GridItem>


            <GridItem>
                <TravelTypesOptions image="Modern.svg">Moderno</TravelTypesOptions>
            </GridItem>

            <GridItem>
                <TravelTypesOptions image="Classic.svg">Clássico</TravelTypesOptions>
            </GridItem>

            <GridItem colSpan={[2, 2, 2, 1]} >
                <TravelTypesOptions image="More.svg">E mais...</TravelTypesOptions>
            </GridItem>

        </Grid>
        

    )
}