import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import BrandLink from "./BrandLink";
import TabsLink from "./TabsLink";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("white", "gray.700")} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        wrap={"wrap"}
      >
        <BrandLink />
      </Flex>

      <Flex alignItems={"center"}>
        <Stack
          direction={["column", "row"]}
          spacing={7}
          align={["center", "center", "center", "flex-end"]}
          display={["none", "none", "none", "flex"]}
        >
          <TabsLink />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
