import type { NextPage } from "next";
import { FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";

const Details: NextPage = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3}>
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="John" />
        </GridItem>
        <GridItem colSpan={1}>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Doe" />
        </GridItem>
        <GridItem colSpan={2}>
          <FormLabel>Address</FormLabel>
          <Input placeholder="Blvd. Broken Dreams 21" />
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
