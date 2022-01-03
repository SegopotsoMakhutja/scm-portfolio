import { FunctionComponent } from 'react';
import { Flex, HStack } from '@chakra-ui/react';
import { Link } from 'react-location';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

type links = {
  to: string;
  title: string;
}

export const Header: FunctionComponent = (props) => {

  const pages: Array<links> = [
    {
      to: '/',
      title: 'Home'
    },
    {
      to: '/about',
      title: 'About'
    },
    {
      to: '/resume',
      title: 'Resume'
    },
  ]

  return (
    <Flex {...props}>
      <ColorModeSwitcher justifyContent="center" />
      <HStack>
        {pages.map((page) => {
          return (
            <Link to={page.to}>
              {page.title}
            </Link>
          )
        })}
      </HStack>
    </Flex>
  )
}

Header.defaultProps = {
  flexDir: 'column',
  p: '1rem',
  width: '100%',
  justify: 'center',
  align: 'center',
  position: 'fixed',
  top: '0',
  left: '0',
}