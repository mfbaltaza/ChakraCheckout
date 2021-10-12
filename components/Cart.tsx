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
  Divider,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

const Cart: NextPage = () => {
  const { toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bgColor={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading>Your Cart</Heading>
        <Text>
          {/* The space within the brackets is to properly add a space before the button */}
          If price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      {/* We Add a Horizontal Stack that takes all the width and center the items */}
      <HStack alignItems="center" spacing={6} w="full">
        {/* With AspectRatio from Chakra and the ratio in 1 we set the layout for a square */}
        <AspectRatio ratio={1} w={24}>
          <Image alt="Product" />
        </AspectRatio>
        {/* With Stack we can manage the stack in both axis */}
        {/* This stack in combination with VStack we use it to create separation between the item
        and the price in the same horizontal space */}
        {/* Here we use it to contain VStack and Heading and apply them an space-between for separation */}
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
      {/* We need to stretch items in the VStack if we want the total to fully separate from the price */}
      <VStack alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <VStack alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading>$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
