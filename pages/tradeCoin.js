import React, { useState } from 'react';
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react';
import OrderBookSelection from '../components/DropDown/Selection';
import Graph from '../components/CryptoGraph';
import { FETCH_CRYPTO_COINS } from '../constants';

const TradeCoin = ({ dropDownData, payCoin, buyCoin }) => {
  const [selectedPayCoin, setPayCoin] = useState(payCoin);
  const [selectedBuyCoin, setBuyCoin] = useState(buyCoin);

  const BuyCoinHandler = (value) => {
    setBuyCoin(value);
  };

  const PayCoinHandler = (value) => {
    setPayCoin(value);
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <div
          style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Flex
            p={4}
            backgroundColor="purple"
            alignItems={{ base: 'center', md: 'flex-start' }}
            justifyContent={{ base: 'flex-start', md: 'center' }}
            backdropFilter="blur(5px)"
            transition="background-color 0.3s ease-in-out"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Box width="80%" pb={10}>
              <Heading as="h1" size="xl" mb={4} color="whiteAlpha.900">
                Exchange rate of {selectedPayCoin} with {selectedBuyCoin}
              </Heading>
              <Graph payCoin={selectedPayCoin} buyCoin={selectedBuyCoin} />
            </Box>
            <OrderBookSelection
              dropDownData={dropDownData}
              PayCoinHandler={PayCoinHandler}
              BuyCoinHandler={BuyCoinHandler}
              payCoin={selectedPayCoin}
              buyCoin={selectedBuyCoin}
            />
          </Flex>
          <Spacer pt={8} />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const payCoin = 'BTC';
  const buyCoin = 'USDC';

  const response = await fetch(`${FETCH_CRYPTO_COINS}?limit=25`);
  const json = await response.json();
  const dropDownData = json.data;

  return {
    props: {
      dropDownData,
      payCoin,
      buyCoin,
    },
  };
}

export default TradeCoin;
