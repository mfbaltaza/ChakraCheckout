import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/react'
import Details from '../components/Details'
import Cart from '../components/Cart'

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="ChakraUI Checkout Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxW="container.xl" p="0">
          <Flex h="100vh" py={20}>
            <Details />
            <Cart />
          </Flex>
        </Container>
      </main>
    </div>
  )
}

export default Index
