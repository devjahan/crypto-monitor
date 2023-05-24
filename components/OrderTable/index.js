import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Spinner, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const OrderTable = ({ title, data, isLoading, currencyArray }) => {
    const [previousPrice, setPreviousPrice] = useState(null);

    useEffect(() => {
        if (data && data.length > 0) {
            const currentPrice = data[0][0];
            setPreviousPrice(currentPrice);
        }
    }, [data]);

    const calculateIndicator = (currentPrice, returnComponent) => {
        if (previousPrice === null || currentPrice === previousPrice) {
            return null;
        } else if (currentPrice > previousPrice) {
            return returnComponent ? <FaCaretUp style={{ color: "green", marginLeft: "0.5rem" }} /> : true
        } else {
            return returnComponent ? <FaCaretDown style={{ color: "red", marginLeft: "0.5rem" }} /> : false
        }
    };

    return (
        <Box p={4} borderRadius="md" boxShadow="lg" mb={8} width="400px" bg="white">
            <Heading as="h2" size="lg" mb={4} color="whiteAlpha.900">
                {title}
            </Heading>
            {isLoading ? (
                <Flex justifyContent="center" alignItems="center" height="200px">
                    <Spinner size="lg" color="blue.500" />
                </Flex>
            ) : (
                <Box overflowY="scroll" bg="whiteAlpha.900" maxHeight="80vh">
                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th fontWeight="bold">Amount ({currencyArray[0]})</Th>
                                <Th fontWeight="bold">Price ({currencyArray[1]})</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data && data.length > 0 ? (
                                data.map((item, index) => (
                                    <Tr key={index} color={calculateIndicator(item[0]) ? 'green.300 !important' : 'red.300 !important'}>
                                        <Td>{item[1]}</Td>
                                        <Td>{item[0]}</Td>
                                        <Td>{calculateIndicator(item[0], true)}</Td>
                                    </Tr>
                                ))
                            ) : (
                                <Tr>
                                    <Td colSpan={3} textAlign="center">No orders available</Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>
                </Box>
            )}
        </Box>
    );
};

export default OrderTable;