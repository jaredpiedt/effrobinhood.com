import Head from 'next/head'
import { 
  Heading,
  Box,
  Text,
  Flex,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

const Home = () => (
  <Box 
    minHeight='100vh'
    height='100%'
    color='#404042'
    paddingLeft={['2rem', '5rem']}
    paddingRight={['2rem', '5rem']}
    paddingBottom={['2rem', '5rem']}
    backgroundColor='#f5f6fa'
  >
    <Flex flexDirection='row' justifyContent='center'>
      <Image src='/middle_finger.png' width={['8rem', '20rem']} height='auto'/>
      <Flex flexDirection='column' width={['10rem', '35rem']} justifyContent='space-around'>
        <Image src='/robinhood_logo.png' height={['4rem', '50rem']} />
      </Flex>
    </Flex>

    <Head>
      <title>Eff robinhood.com</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Heading as='h1' size='4xl' textAlign='center'>
      Eff robinhood.com
    </Heading>
    <Text textAlign='center'>(<a href='https://github.com/jaredpiedt/effrobinhood.com'>open source, contributions encouraged</a> to provide the best experience of effing robinhood)</Text>

    <Heading as='h2' marginTop='5rem'>
      Background
    </Heading>

    <Text>
      This app exclusively exists to stick it to robinhood.com, a website that supposedly was created to stick
      up for the masses and allow the populus to invest with the same resources as the hedge fund titans.
    </Text>

    <Text>
      This was proved false on January 28th, 2021, when robinhood, after r/wallstreetbets short squeezed 10B+
      out of hedge funds on $AMC, $GME, and others, froze trading "except to close out positions". Utter bull shit.
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
      Transfering assets out of robinhood without selling
    </Heading>
    <UnorderedList>
      <ListItem>You can transfer stocks and cash to other brokerages through ACATS (Automated Customer Account Transfer Service) transfer. If you want to keep your Robinhood account, you can initiate a partial transfer. Otherwise, you can initiate a full transfer, and we’ll close your account once the process is complete.</ListItem>
      <ListItem>Note that there is a $75 fee to transfer your assets out of Robinhood, whether as a partial or full transfer. (eff that)</ListItem>
      <ListItem>To begin the process, you'll need to contact your other brokerage and have them initiate the transfer. They’ll submit the transfer instructions to our clearing partner to transfer over your assets and funds.</ListItem>
    </UnorderedList>

    <Heading as='h3'>
      Transferring cash out
    </Heading>
    <UnorderedList>
      <ListItem>Sell all assets</ListItem>
      <ListItem>Initiate cash transfer to your bank (within settings / transfers portion of the application)</ListItem>
    </UnorderedList>

    <Heading as='h1'>
      Trading platform alternatives
    </Heading>

    <Heading as='h3'>
      Fidelity
    </Heading>

    <Text>Pro's</Text>
    <UnorderedList>
    </UnorderedList>
    
    <Text>Con's</Text>
    <UnorderedList>
    </UnorderedList>

    <Heading as='h3'>
      SoFi
    </Heading>

    <Text>Pro's</Text>
    <UnorderedList>
    </UnorderedList>
    
    <Text>Con's</Text>
    <UnorderedList>
    </UnorderedList>

    <Heading as='h3'>
      Vanguard
    </Heading>
    
    <Text>Pro's</Text>
    <UnorderedList>
    </UnorderedList>

    <Text>Con's</Text>
    <UnorderedList>
    </UnorderedList>

    <Heading as='h3'>
      E-Trade
    </Heading>

    <Text>Pro's</Text>
    <UnorderedList>
    </UnorderedList>
    
    <Text>Con's</Text>
    <UnorderedList>
    </UnorderedList>
  </Box>
)

export default Home
