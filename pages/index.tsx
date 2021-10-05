import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/react'
import Cart from '../components/Cart'
import Details from '../components/Details'

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
            <Cart />
            <Details />
          </Flex>
        </Container>
      </main>
    </div>
  )
}

export default Home
