import { FunctionComponent } from "react"
import { Text, IconButton, Box, HStack, useMediaQuery } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

import { Header, PageWrap } from '../../components';
import { MY_NAME, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL } from '../../constants'

import { AnimatedGradientText } from './home.styles';

export const Home: FunctionComponent = () => {

  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)')

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
        <AnimatedGradientText size={isSmallerThan768 ? "lg" : "2xl"}>
          {MY_NAME}
        </AnimatedGradientText>
        <Text fontSize={{ base: "lg", md: "2xl" }}>
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