import Head from 'next/head'
import { 
  Heading,
  Box,
  Text,
  Flex,
  Image
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Box 
      minHeight='100vh'
      height='100%'
      color='#404042'
      padding={{ base: '2rem', large: '10rem'}}
      backgroundColor='#f5f6fa'
    >
      <Flex flexDirection='row' justifyContent='center'>
        <Image src='/middle_finger.png' width='20rem' height='20rem'/>
        <Flex flexDirection='column' width='35rem' justifyContent='space-around'>
          <Image src='/robinhood_logo.png' height='10rem'/>
        </Flex>
      </Flex>

      <Head>
        <title>Eff robinhood.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading as='h1' textAlign='center'>
        Eff robinhood.com
      </Heading>
      <Text textAlign='center'>(open source, contributions encouraged to provide the best experience of effing robinhood)</Text>

      <Heading as='h2' marginTop='5rem'>
        Background
      </Heading>

      <Text>
        This app exclusively exists to stick it to robinhood.com, a website that supposedly was created to stick
        up for the masses and allow the populus to invest with the same resources as the hedge fund titans.
      </Text>

      <Text>
        This was proved false on January 28th, 2021, when robinhood, after r/wallstreetbets short squeezed 10B+
        out of hedge funds on $AMC, $GME, and others, freezed trading "except to close out positions". Utter bull shit.
      </Text>

      <Text>
        Who did this benefit? Only the hedge funds with massive short positions. Once again, a corporation proves it's
        only meaning of existence is to protect the interests of the extremely wealthy. 
      </Text>

      <Heading as='h2' marginTop='4rem'>
        The power of the people: migrating away from robinhood
      </Heading>

      <Text>
        Robinhood did it's job, it lowered transactional fee's accross all platforms. Then they turned their back on the 
        people that built them. This doc will exclusively exist to provide guides on how to move assets / money to other 
        trading platforms, and the benefits of each of those trading platforms.
      </Text>

      <Heading as='h3'>
        Robinhood to Fidelity
      </Heading>

      <Heading as='h3'>
        Robinhood to SoFi
      </Heading>

      <Heading as='h3'>
        Robinhood to Vanguard
      </Heading>

      <Heading as='h3'>
        Robinhood to E-Trade
      </Heading>
    </Box>
  )
}
