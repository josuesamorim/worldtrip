import { Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { FiInfo } from 'react-icons/Fi';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Portal
} from "@chakra-ui/react"


export function Infos() {
    return (
        <Flex
            align="center"
            justify="space-between"
        >
            <Flex direction="column" justify="center" align={["flex-start", "center"]}>
                <Heading fontSize={["2xp", "xl"]}
                    color="yellow.400"
                    fontWeight="600"
                >
                    50
                </Heading>
                <Text fontWeight="600"
                    fontSize={["md", "xl"]}
                    color="gray.700"
                >
                    países
                </Text>
            </Flex>

            <Flex direction="column" justify="center" align={["flex-start", "center"]}>
                <Heading fontSize={["2xp", "xl"]}
                    color="yellow.400"
                    fontWeight="600"
                >
                    60
                </Heading>
                <Text fontWeight="600"
                    fontSize={["md", "xl"]}
                    color="gray.700"
                >
                    línguas
                </Text>
            </Flex>

            <Flex direction="column" justify="center" align={["flex-start", "center"]}>
                <Heading fontSize={["2xp", "xl"]}
                    color="yellow.400"
                    fontWeight="600"
                >
                    24
                </Heading>
                <Text fontWeight="600"
                    fontSize={["md", "xl"]}
                    color="gray.700"
                    
                >
                    cidades +100

                    <Popover>
                        <PopoverTrigger>
                            <span>
                            <Icon as={FiInfo} size="16" alignItems="center" justifyContent="center" ml="1" />
                            </span>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent bg="gray.700" color="yellow.400" >
                                <PopoverArrow bg="gray.700" />
                                <PopoverHeader>Cidades +100</PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody fontWeight="400" fontSize="lg" >
                                   Paris
                                   Italia
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </Popover>

                </Text>
            </Flex>

        </Flex>
    )
}