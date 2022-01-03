import * as React from 'react';
import { Text, Grid, GridItem, Box, Heading, Divider } from '@chakra-ui/react';
import { Header, PageWrap } from '../../components';
import PersonalDetails from '../../assets/PersonalDetails.json';

export const Resume: React.FC = () => {

  console.log(PersonalDetails)

  return (
    <PageWrap title="resume" display="grid">
      <Grid
        templateColumns='repeat(2, 1fr)'
        gap={4}
        padding='1.5rem'
      >
        <GridItem rowSpan={2} colSpan={1} w='100%' bg='blue.500' justifyContent='center' alignItems='center'>
          <Box>
            <Heading>
              {PersonalDetails.role}
            </Heading>
            <Divider />
            <Text>
              <strong>
                {PersonalDetails.name}
              </strong>
            </Text>
          </Box>
        </GridItem>
        <GridItem w='100%' bg='blue.300'>
          <Text>built with 🖤 </Text>
        </GridItem>
        <GridItem w='100%' bg='blue.700'>
          <Text>built with 🖤 </Text>
        </GridItem>
        <Header />
      </Grid>
    </PageWrap>
  )
}