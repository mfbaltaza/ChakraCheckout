import type { NextPage } from "next";
import { VStack, Heading, Text } from "@chakra-ui/react";

const Cart: NextPage = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3}>
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
    </VStack>
  );
};

export default Cart;
