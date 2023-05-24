import React from 'react';
import { useRouter } from "next/router";
import { Box, Card, CardHeader, CardBody, Heading, Stack, StackDivider, Button } from '@chakra-ui/react';
import DropDown from '.';

const OrderBookSelection = ({ dropDownData, PayCoinHandler, BuyCoinHandler, payCoin, buyCoin }) => {
    const router = useRouter();

    const handleCheckOrderBook = () => {
        const orderBookUrl = `/orderBook?payCoin=${payCoin}&buyCoin=${buyCoin}`;
        router.push(orderBookUrl);
    };
    
    return (
        <Box width="50%" ml={4}>
            <Card boxShadow="xl">
                <CardHeader>
                    <Heading as="h2" size="md">
                        Select Pair For your Order Book
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                            <Heading as="h3" size="xs" textTransform="uppercase" color="whiteAlpha.900">
                                You Pay
                            </Heading>
                            <DropDown
                                color="whiteAlpha.900"
                                options={dropDownData}
                                onOptionChanged={PayCoinHandler}
                                placeholder="BTC"
                                id={"you-pay"}
                            />
                        </Box>
                        <Box>
                            <Heading as="h3" size="xs" textTransform="uppercase" color="whiteAlpha.900">
                                You Receive
                            </Heading>
                            <DropDown
                                color="whiteAlpha.900"
                                options={dropDownData}
                                onOptionChanged={BuyCoinHandler}
                                placeholder="USDC"
                                id={"you-receive"}
                            />
                        </Box>
                        <Box>
                            <Heading as="h3" size="xs" textTransform="uppercase" color="whiteAlpha.900">
                                Check Order Book
                            </Heading>
                            <Button onClick={handleCheckOrderBook} mt={2}>
                                Go to Order Book
                            </Button>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    );
};

export default OrderBookSelection;
