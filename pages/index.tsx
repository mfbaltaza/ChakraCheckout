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
          {/* Because we set our default value to a static vh, we can't scroll when we are on mobile
          We change that setting the base to auto */}
          <Flex h={{ base: "auto", md: "100vh" }} py={[0, 10, 20]} flexDirection={{ base: "column-reverse", md: "row" }}>
            <Details />
            <Cart />
          </Flex>
        </Container>
      </main>
    </div>
  )
}

export default Index
