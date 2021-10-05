import type { NextPage } from 'next'
import { VStack } from "@chakra-ui/react";

const Details: NextPage = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bgColor="gray.50"
    ></VStack>
  );
};

export default Details;
