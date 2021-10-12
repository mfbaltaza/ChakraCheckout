import type { NextPage } from "next";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  useBreakpointValue
} from "@chakra-ui/react";

const Details: NextPage = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 })

  return (
    // We use VStack to stack components vertically
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      {/* Here we nest a VSTack to change spacing specificalyl between heading and text */}
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      {/* We use SimpleGrid to implement Grid with Chakra */}
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        {/* And with GridItem we can start positioning elements within the Grid */}
        <GridItem colSpan={colSpan}>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="John" />
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Doe" />
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel>Address</FormLabel>
          <Input placeholder="Blvd. Broken Dreams 21" />
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormLabel>City</FormLabel>
          <Input placeholder="San Francisco" />
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value="usa">United States</option>
            <option value="de">Germany</option>
            <option value="it">Italy</option>
            <option value="ven">Venezuela</option>
          </Select>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked colorScheme="brand">
            Ship to the billing address
          </Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            size="lg"
            w="full"
            colorScheme="brand"
            onClick={() => console.log("Keep Winning")}
          >
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
