import {
  Text,
  Box,
  Heading,
  Badge,
  Button,
  Center,
  Stack,
  useColorModeValue,
  Avatar,
  Divider,
  HStack,
  Icon,
  FlexProps,
} from '@chakra-ui/react';

interface Detail {
  icon: any;
  detail: string
}

interface CardProps extends FlexProps {
  name?: string;
  heading?: string;
  subTitle?: string;
  description?: string;
  avatar: boolean;
  isDownloadCV: boolean;
  badgeItems?: Array<string>;
  contactDetails?: Array<Detail>;
}

const Card = ({
  name,
  heading,
  subTitle,
  description,
  avatar,
  isDownloadCV,
  badgeItems,
  contactDetails,
  ...rest
}: CardProps) => {

  return (
    <Box {...rest}>
      <Center py={6}>
        <Stack
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue("dark", "light")}
          boxShadow={'lg'}
          overflow={'auto hidden'}
          padding={4}
        >
          {avatar ? (
            <Box display='flex' flex={1} justifyContent='center' alignItems='center'>
              <Avatar name={name} size="2xl"/>
            </Box>
          ): null}
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {heading}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {subTitle}
            </Text>
            <Divider bg={'gray.500'}/>
            {description ? (
              <Text
                textAlign={'center'}
                px={3}
                overflowY={'scroll'}
                // maxHeight='100px'
              >
                {description}
              </Text>
            ) : null}
            {contactDetails ? (
              contactDetails.map((detail) => (
                <HStack pl={0} spacing={1} alignItems="flex-start">
                  <Icon
                    as={detail.icon}
                    h={6}
                    w={6}
                  />
                    <Text px={2} fontSize="sm">
                      {detail.detail}
                    </Text>
                </HStack>
              ))
              ) : null}
            <Box
              display={'inline-block'}
              align={'center'}
              justify={'center'}
              direction={'row'}
              mt={6}
              flexWrap={'wrap'}
              mx={2}
            >
              {badgeItems?.map((item: string) => (
                <Badge
                  px={2}
                  py={1}
                  variant='subtle'
                  colorScheme='blue'
                  fontWeight={'400'}
                >
                  {item}
                </Badge>
              ))}
            </Box>
            {isDownloadCV ? (
              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Button
                  flex={1}
                  fontSize={'sm'}
                  fontWeight={'400'}
                  rounded={'full'}
                  bg={'green.100'}
                  variant={'subtle'}
                  color={'green.700'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'green.300',
                  }}
                  _focus={{
                    bg: 'green.300',
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            ): null}
          </Stack>
        </Stack>
      </Center>
    </Box>
  )
}

export default Card