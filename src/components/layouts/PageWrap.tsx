import { Flex, FlexProps } from '@chakra-ui/react'
import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../Footer';

type PageWrapProps = FlexProps & {
  title: string
}

const PageWrap: FunctionComponent<PageWrapProps> = ({ children, title, ...rest }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Flex {...rest}>
        {children}
        <Footer/>
      </Flex>
    </>
  )
}

PageWrap.defaultProps = {
  pt: 'calc(64px + 1rem)',
  width: '100vw',
  mx: 'auto',
  flexDir: 'column',
  minHeight: '100vh',
  align: 'flex-start',
  justify: 'flex-start',
  overflow: 'hidden',
  position: 'fixed',
}

export default PageWrap