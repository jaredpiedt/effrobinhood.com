import { Box, Flex, Link } from '@chakra-ui/react'

const Header = () => {
  return (
    <>
      <Box as='header' padding={['1rem', '1.5rem', '1.5rem 5rem']} width='100%'>
        <Flex
          alignItems='center'
          width='75%'
          margin='auto'
          height='auto'
          justify='space-between'
          flexDirection={['column','row']}
        >
          <Flex
            as='nav'
            height='5rem'
            flexDirection={['column','row']}
            flex='1'
            alignItems='center'
            justifyContent={'space-between'}
            marginLeft={['2.25rem', 'auto']}
            aria-label='Primary navigation'
          >
            <Link
              href='#Coinbase'
              textDecoration='underline'
              color='boulder'
              padding='.25em'
            >
              Coinbase
            </Link>
            <Link
              href='#E*Trade'
              textDecoration='underline'
              color='boulder'
              padding='.25em'
            >
              E*Trade
            </Link>
            <Link
              href='#Public'
              textDecoration='underline'
              color='boulder'
              padding='.25em'
            >
              Public
            </Link>
            <Link
              href='#SoFi'
              textDecoration='underline'
              color='boulder'
              padding='.25em'
            >
              SoFi
            </Link>
            <Link
              href='#Fidelity'
              textDecoration='underline'
              color='boulder'
              padding='.25em'
            >Fidelity</Link>
            <Link
              href='#Vanguard'
              textDecoration='underline'
              color='boulder'
              padding='.25em'
            >Vanguard</Link>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Header
