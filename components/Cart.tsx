import type { NextPage } from "next";
import {
  VStack,
  HStack,
  Stack,
  Heading,
  Text,
  Button,
  AspectRatio,
  Image,
  Divider
} from "@chakra-ui/react";

const Cart: NextPage = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bgColor="gray.50"
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading>Your Cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack alignItems="center" spacing={6} w="full">
        <AspectRatio ratio={1} w={24}>
          <Image></Image>
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm">$119.00</Heading>
        </Stack>
      </HStack>
      <VStack alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <VStack alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text>Total</Text>
          <Heading>$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
