import { Box, FlexProps, GridProps } from '@chakra-ui/react'
import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../Footer';

type PageWrapProps = FlexProps & GridProps& {
  title: string;
  showFooter?: boolean;
}

const PageWrap: FunctionComponent<PageWrapProps> = ({ children, title, showFooter, ...rest }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box {...rest}>
        {children}
        {showFooter ? <Footer /> : null}
      </Box>
    </>
  )
}

PageWrap.defaultProps = {
  p: 4,
  pt: 'calc(64px + 1rem)',
  height: '100vh',
  width: '100vw',
  mx: 'auto',
  flexDir: 'column',
  minHeight: '100vh',
  align: 'flex-start',
  justify: 'flex-start',
}

export default PageWrap