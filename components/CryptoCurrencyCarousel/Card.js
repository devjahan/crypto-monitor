import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import DialogueModal from "./DialogueModal";

const Card = ({ img, subtitle, itemName }) => {
  return (
    <Center >
      <Box
        role={"group"}
        p={8}
        maxW={{ base: "100%", sm: "330px" }}
        w={"full"}
        bg={useColorModeValue("gray.800", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        minWidth="300px"
        margin={50}
        mb={0}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={{ base: "150px", sm: "200px" }}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={{ base: "150px", sm: "230px" }}
            width={{ base: "150px", sm: "230px" }}
            objectFit={"cover"}
            src={img}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {subtitle}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {itemName}
          </Heading>
        </Stack>
        <Stack pt={10} align={"center"}>
          <DialogueModal
            title={subtitle}
            selectedValue={subtitle}
          />
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;
