import { Box, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { BRAND_IMAGE } from "../../../constants";

const BrandLink = () => {
  return (
    <Flex alignItems="center">
      <NextLink href="/">
        <Box>
          <Image
            src={BRAND_IMAGE}
            alt="Logo"
            width={50}
            height={8}
          />
        </Box>
        <Box ml={2}>DigitalCurrency</Box>
      </NextLink>
    </Flex>
  );
};

export default BrandLink;