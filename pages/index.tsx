import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Flex, VStack } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="ChakraUI Checkout Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxW="xl" padding="0">
          <Flex h="100vh" py={30}>
            <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start"></VStack>
            <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bgColor="gray.50"></VStack>
          </Flex>
        </Container>
      </main>
    </div>
  )
}

export default Home
