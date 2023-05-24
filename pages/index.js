import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import Image from "next/image";

import CryptoCurrencyCarousel from "../components/CryptoCurrencyCarousel";
import { DASHBOARD_IMAGE } from "../constants";

const Home = ({ cryptoCurrencies }) => {
  const router = useRouter();

  return (
    <>
      <Container
        pb="20"
        maxW="80%"
        display="flex"
        justifyContent="space-between"
      >
        <HStack
          as={Box}
          textAlign="left"
          flexDirection="column"
          spacing={{ base: 8, md: 12 }}
          py={{ base: 8, md: 8 }}
        >
          <Box>
            <Heading
              fontWeight="bold"
              paddingTop={{ base: 30, md: 100 }}
              fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
              lineHeight="100%"
            >
              Delve into the Market <br />
              <Text as="span" fontSize={{ base: "4xl" }}>
                Explore the Order Book
              </Text>
            </Heading>
            <Text color="whiteAlpha.900">
              DigitalCurrency finds you the best prices across exchanges and
              combines them into one trade.
            </Text>
            <Stack
              direction="column"
              spacing={3}
              align="center"
              alignSelf="center"
              position="relative"
            >
              <Button
                colorScheme="yellow"
                rounded="full"
                mt={50}
                height="80px"
                width="300px"
                fontSize="24px"
                fontWeight="bold"
                alignSelf="flex-start"
                _hover={{
                  bg: "yellow.500",
                }}
                onClick={() => {
                  router.push('/tradeCoin');;
                }}
              >
                Start Trading
              </Button>
            </Stack>
          </Box>
        </HStack>
        <HStack>
        <Image
            src={DASHBOARD_IMAGE}
            alt="Bitcoin image"
            width={700}
            height={500}
          />
        </HStack>
      </Container>

      {cryptoCurrencies && (
        <CryptoCurrencyCarousel cryptoCurrencies={cryptoCurrencies} />
      )}
    </>
  );
};

export async function getStaticProps() {
  const response = await import("./api/crypto-list.json");
  const cryptoCurrencies = await response.default;

  return {
    props: { cryptoCurrencies },
  };
}

export default Home;
