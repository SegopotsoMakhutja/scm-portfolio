import * as React from 'react';
import { Text, Box, Heading, Flex } from '@chakra-ui/react';
import { Header, PageWrap } from '../../components';
import PersonalDetails from '../../assets/PersonalDetails.json';

export const About: React.FC = () => {

  return (
  <PageWrap title="about" overflow='hidden'>
    <Header/>
    <Flex p='2rem' flexDir='column'>
      <Box justifyContent='center' alignItems='center' marginBottom='1rem' maxHeight={'90vh'} overflowY={'auto'}>
        <Heading
          as='h1'
          size='2xl'
          alignItems='center'
          bgGradient="linear-gradient(to top, #da22ff, #9733ee)"
          backgroundClip="text"
          pb='0.5rem'
        >
          Segopotso Makhutja
        </Heading>
        <Heading
          as='h3'
          size='l'
          alignItems='center'
          bgGradient="linear(to-t, #da22ff, #9733ee)"
          backgroundClip="text"
          pb='1.5rem'
        >
          {`${PersonalDetails.role}, ${PersonalDetails.location}`}
        </Heading>
        <Box marginBottom='4rem'>
          <Text paddingBottom='1rem'>
            {PersonalDetails.about}
          </Text>
          {PersonalDetails.hobbies.map((hobby) => {
            return (
              <>
                <Heading as='h4' size='md' paddingBottom='0.5rem'>
                  {hobby.title}
                </Heading>
                <Text paddingY='1rem'>
                  {hobby.description}
                </Text>
              </>
            )
          })}
        </Box>
      </Box>
    </Flex>
  </PageWrap>
  )
}