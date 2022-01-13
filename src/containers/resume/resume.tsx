import * as React from 'react';
import { 
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Header, PageWrap } from '../../components';
import Card from '../../components/data/Card/Card';
import Ma from '../../components/data/Articles/Article';
import PersonalDetails from '../../assets/PersonalDetails.json';
import {
  MdLocationOn,
} from 'react-icons/md';

export const Resume: React.FC = () => {

  const contactDetails = [
    {
      icon: MdLocationOn,
      detail: 'Johannesburg, South Africa'
    }
  ]

  return (
    <PageWrap title="resume" overflow='hidden'>
      <Header/>
      <Grid
        mt='1rem'
        templateColumns='repeat(2, 1fr)'
        gap={4}
        padding='1.5rem'
        overflowY='auto'
        display={{ base: 'block', md: 'grid' }}
        maxHeight='90vh'
        overflowX='hidden'
      >
        <GridItem rowSpan={2} colSpan={1} w='100%' justifyContent='center' alignItems='center'>
          <Card
            avatar
            isDownloadCV
            name="Segopotso Makhutja"
            heading="Segopotso Makhutja"
            subTitle={PersonalDetails.role}
            contactDetails={contactDetails}
          />
          <Card
            avatar={false}
            isDownloadCV={false}
            heading="About"
            subTitle="A little bit about me"
            description={PersonalDetails.about}
          />
        </GridItem>
        <GridItem w='100%' bg='blue.300'>
          <Ma />
        </GridItem>
        <GridItem w='100%' bg='blue.700'>
          <Ma/>
        </GridItem>
      </Grid>
    </PageWrap>
  )
}