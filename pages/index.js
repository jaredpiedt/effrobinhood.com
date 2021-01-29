import { Fragment } from 'react';
import Head from 'next/head';
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';

import Header from '../components/header';
import brokers from '../data/brokers.yml';

const Home = () => (
  <Box
    minHeight="100vh"
    height="100%"
    color="#404042"
    paddingLeft={['2rem', '5rem']}
    paddingRight={['2rem', '5rem']}
    paddingBottom={['2rem', '5rem']}
    backgroundColor="#f5f6fa"
  >
    <Flex flexDirection="row" justifyContent="center">
      <Image
        src="/middle_finger.png"
        width={['8rem', '20rem']}
        height={['8rem', '20rem']}
      />
      <Flex
        flexDirection="column"
        width={['10rem', '35rem']}
        justifyContent="space-around"
      >
        <Image src="/robinhood_logo.png" height={['4rem', '10rem']} />
      </Flex>
    </Flex>

    <Head>
      <title>Eff robinhood.com</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Heading as="h1" size="2xl" textAlign="center" marginBottom="2rem">
      Eff robinhood.com - find alternatives
    </Heading>
    <Text textAlign="center">
      (
      <Link
        href="https://github.com/jaredpiedt/effrobinhood.com"
        textDecoration="underline"
      >
        open source, contributions encouraged
      </Link>{' '}
      to provide the best experience of effing robinhood)
    </Text>

    <Heading as="h2" marginTop="5rem" marginBottom="1rem">
      Background
    </Heading>

    <Text marginBottom="1rem">
      This app exclusively exists to stick it to robinhood.com, a website that
      supposedly was created to stick up for the masses and allow the populus to
      invest with the same resources as the hedge fund titans.
    </Text>

    <Text marginBottom="1rem">
      This was proved false on January 28th, 2021, when robinhood, after
      r/wallstreetbets short squeezed 10B+ out of hedge funds on $AMC, $GME, and
      others, froze trading &quot;except to close out positions&quot;. Utter
      bull shit.
    </Text>

    <Text marginBottom="1rem">
      Who did this benefit? Only the hedge funds with massive short positions.
      Once again, a corporation proves it&apos;s only meaning of existence is to
      protect the interests of the extremely wealthy.
    </Text>

    <Text marginBottom="1rem">
      <Link
        href="https://www.reddit.com/r/wallstreetbets/comments/l6x130/class_action_against_robinhood_allowing_people_to/"
        textDecoration="underline"
        target="_blank"
      >
        Encourage a class action lawsuit
      </Link>
    </Text>

    <Heading as="h1" marginTop="4rem" marginBottom="3rem" textAlign="center">
      The power of the people: migrating away from robinhood
    </Heading>

    <Text marginBottom="1rem">
      Robinhood did it&apos;s job, it lowered transactional fee&apos;s accross
      all platforms. Then they turned their back on the people that built them.
      This doc will exclusively exist to provide guides on how to move assets /
      money to other trading platforms, and the benefits of each of those
      trading platforms.
    </Text>

    <Box marginBottom="2rem">
      <Heading as="h3" marginBottom="1rem" size="lg">
        Transfering assets out of robinhood without selling
      </Heading>
      <UnorderedList marginBottom="1rem">
        <ListItem>
          You can transfer stocks and cash to other brokerages through ACATS
          (Automated Customer Account Transfer Service) transfer. If you want to
          keep your Robinhood account, you can initiate a partial transfer.
          Otherwise, you can initiate a full transfer, and we’ll close your
          account once the process is complete.
        </ListItem>
        <ListItem>
          Note that there is a $75 fee to transfer your assets out of Robinhood,
          whether as a partial or full transfer. (eff that)
        </ListItem>
        <ListItem>
          To begin the process, you&apos;ll need to contact your other brokerage
          and have them initiate the transfer. They’ll submit the transfer
          instructions to our clearing partner to transfer over your assets and
          funds.
        </ListItem>
      </UnorderedList>
    </Box>

    <Box marginBottom="2rem">
      <Heading as="h3" marginBottom="1rem" size="lg">
        Transferring cash out
      </Heading>
      <UnorderedList marginBottom="1rem">
        <ListItem>Sell all assets</ListItem>
        <ListItem>
          Initiate cash transfer to your bank (within settings / transfers
          portion of the application)
        </ListItem>
      </UnorderedList>
    </Box>

    <Heading as="h1" textAlign="center" marginBottom="3rem">
      Trading platform alternatives
    </Heading>

    {brokers.map((b) => (
      <Fragment key={b.name}>
        <Heading as="h3" id={b.name} marginBottom="1rem" size="lg">
          <Link href={b.link} target="_blank" textDecoration="underline">
            {b.name}
          </Link>
        </Heading>
        <UnorderedList marginBottom="1rem">
          {b.pros?.map((pro) => (
            <ListItem key={pro}>{pro}</ListItem>
          ))}
        </UnorderedList>
      </Fragment>
    ))}
  </Box>
);

export default Home;
