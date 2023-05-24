import {
  Box,
  Container,
  Divider,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import FooterNotes from "./FooterNotes";

const Footer = () => {
  return (
    <Box
      bg="black"
      color="white"
      textAlign="center"
      pt={20}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          justifyItems="center"
        >
          <FooterNotes />
        </SimpleGrid>
      </Container>
      <Divider />
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 DigitalCurrency. All rights reserved</Text>
      </Container>
    </Box>
  );
};

export default Footer;
