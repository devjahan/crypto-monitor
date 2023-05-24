import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Carousel from "./Carousel";

const CryptoCurrencyCarousel = ({ cryptoCurrencies }) => {
  return (
    <Box p={2}>
      <Container maxW="3xl" textAlign="center">
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          pt="50"
          mb="5"
        >
          Top Coins
        </Heading>
        <Text
          color="whiteAlpha.900"
          fontSize={{ base: "sm", sm: "lg" }}
          mb="25"
        >
          Following is a list of available among top coins in the market.
        </Text>
      </Container>

      <Container
        maxW="100%"
        mt={12}
        data-testid="crypto-list"
        h="400"
        position="relative"
        margin="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Carousel cryptoCurrencies={cryptoCurrencies} />
      </Container>
    </Box>
  );
};

export default CryptoCurrencyCarousel;
