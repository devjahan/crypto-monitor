import React, { useState, useEffect } from 'react';
import { Flex, Box, Heading } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import OrderTable from '../components/OrderTable';

const OrderBook = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const currencyPair = 'btcusd';
  const defaultToken1 = 'BTC';
  const defaultToken2 = 'USD';
  const getChannelName = (pair) => `order_book_${pair}`;
  const getWebSocketUrl = () => 'wss://ws.bitstamp.net';
  const router = useRouter();
  const { payCoin, buyCoin } = router.query;
  const currencyArray = [
    payCoin || defaultToken1,
    buyCoin || defaultToken2,
  ];

  useEffect(() => {
    const subscribe = {
      event: 'bts:subscribe',
      data: {
        channel: getChannelName(currencyPair)
      }
    };
    const ws = new WebSocket(getWebSocketUrl());

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setOrders(response.data);
      setIsLoading(false);
    };
    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, [currencyPair]);

  const { bids, asks } = orders;
  return (
    <>
      <Flex direction="column" alignItems="center" p={8} bg='linear-gradient(170deg, #000032 0%, #030017 66%)'>
        <Heading as="h1" size="xl" my={4} color="whiteAlpha.900">Digital Currency Order Book</Heading>
        <Flex direction="column" alignItems="center" mb={8}>
          <Box position="absolute" top={0} left={0} width="40%" right={0} bottom={0} bg="rgba(255, 255, 255, 0.6)" zIndex={-1} />
          <Box position="relative" textAlign="center" zIndex={1}>
            <Heading as="h2" size="lg" mb={4} color="whiteAlpha.900">Live Updates of {currencyArray[0]} & {currencyArray[1]} </Heading>
          </Box>
        </Flex>
        <Flex justifyContent="center" flexWrap="wrap" gap="20px" width="80%" spacing={8}>
          <OrderTable title="Bids" data={bids} isLoading={isLoading} currencyArray={currencyArray} />
          <OrderTable title="Asks" data={asks} isLoading={isLoading} currencyArray={currencyArray} />
        </Flex>
      </Flex>
    </>
  );
};

export default OrderBook;
