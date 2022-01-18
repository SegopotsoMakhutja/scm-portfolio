import { FunctionComponent } from "react"
import { Text, IconButton, Box, HStack } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

import { Header, PageWrap } from '../../components';
import { MY_NAME, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL } from '../../constants'

import { AnimatedGradientText } from './home.styles';


export const Home: FunctionComponent = () => {

  type SocialItem = {
    icon: React.ReactElement
    url?: string
    ariaLabel: string
  }

  const SOCIAL_ITEMS: SocialItem[] = [
    {
      icon: <AiFillLinkedin />,
      url: LINKEDIN_URL,
      ariaLabel: 'Linked In'
    },
    {
      icon: <AiFillGithub />,
      url: GITHUB_URL,
      ariaLabel: 'Github'
    },
    {
      icon: <AiFillInstagram />,
      url: INSTAGRAM_URL,
      ariaLabel: 'Instagram'
    }
  ]

  return (
    <PageWrap
      title="home"
      justifyContent="center"
      alignItems="center"
      display="flex"
      showFooter
    >
      <Header />
      <Box align="center">
        <AnimatedGradientText size="2xl">
          {MY_NAME}
        </AnimatedGradientText>
        <Text fontSize="2xl">
          Software Developer
        </Text>
      </Box>
      <HStack>
        {SOCIAL_ITEMS.map((item, index) =>
          <IconButton
            key={index}
            aria-label={item.ariaLabel}
            icon={item.icon}
            variant="ghost"
            fontSize="4xl"
            onClick={() => window.open(`${item.url}`)}
          />
        )}
      </HStack>
    </PageWrap>
  )
}