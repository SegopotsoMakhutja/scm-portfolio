import { FunctionComponent } from 'react'
import { Flex, Text } from '@chakra-ui/react'


export const Footer: FunctionComponent = (props) => {
  const year = new Date().getFullYear()

  return (
    <Flex {...props}>
      <Text>built with 💜 &copy; {year} </Text>
    </Flex>
  )
}

Footer.defaultProps = {
  flexDir: 'column',
  p: '1rem',
  width: '100%',
  justify: 'center',
  align: 'center',
  position: 'fixed',
  bottom:'4',
  left: '0',
}