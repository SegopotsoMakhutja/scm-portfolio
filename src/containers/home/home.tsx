import { FunctionComponent } from "react"
import { Heading, Text, IconButton, Box, HStack } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

import { Header, PageWrap } from '../../components';
import { MY_NAME, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL } from '../../constants'


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
    <PageWrap title="home" justify="center" align="center">
      <Header />
      <Box align="center">
        <Heading as="h1" size="2xl">
          {MY_NAME}
        </Heading>
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