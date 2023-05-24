import { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Button,
  Flex,
  Spinner,
  Text,
  Box,
  Alert,
  AlertIcon,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';

import { FETCH_CRYPTO_DETAILS } from '../../constants';

const DialogueModal = ({ title, selectedValue }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cryproDetails, setCryptoDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      try {
        fetch(`${FETCH_CRYPTO_DETAILS}${selectedValue.toLowerCase()}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              setError(data.error);
            } else {
              setCryptoDetails(data);
            }
            setIsLoading(false);
          });
      } catch (error) {
        setError("Failed to Load Data");
        setIsLoading(false);
      }
    }
  }, [isOpen]);

  return (
    <>
      <Button
        px={8}
        bg={useColorModeValue('#151f21', 'gray.900')}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          bg: 'grey',
          boxShadow: 'lg',
        }}
        onClick={onOpen}
      >
        View
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent borderRadius={25}>
          <ModalHeader textAlign="center" pt={6} mr={5}>
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading ? (
              <Flex justify="center" align="center" minH="200px">
                <Spinner size="lg" />
              </Flex>
            ) : error ? (
              <Box>
                <Alert
                  status="warning"
                  variant="subtle"
                  bg="yellow.100"
                  borderColor="yellow.400"
                  color="black"
                  borderRadius="md"
                  boxShadow="md"
                >
                  <AlertIcon boxSize={4} mr={3} />
                  <Text fontSize="sm">Unable to Load Data. Please Try Again Later.</Text>
                </Alert>
              </Box>
            ) : (
              <Box textAlign="center">
                <Stat>
                  <StatNumber>{cryproDetails.coingecko_score}</StatNumber>
                  <StatHelpText>
                    <StatArrow type='increase' />
                    {cryproDetails.sentiment_votes_up_percentage}%
                  </StatHelpText>
                </Stat>
                <Text textAlign={'justify'}>{cryproDetails?.description?.bg}</Text>
              </Box>
            )}
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DialogueModal;