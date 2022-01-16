import { Box, Flex } from '@chakra-ui/react';
import { Header, PageWrap } from '../../components';
import BlogPosts from '../../assets/BlogPosts.json';
import Post from '../../components/data/Post/Post';

export const Blog = () => {

  return (
    <PageWrap title="blog" overflow='hidden'>
      <Header />
      <Flex flexDir='column' overflowX={'hidden'} alignItems={'center'}>
        <Box justifyContent='center' alignItems='center' marginBottom='1rem' maxHeight={'90vh'} overflowY={'auto'}>
        {BlogPosts ? <Post posts={BlogPosts}/> : null}
        </Box>
      </Flex>
    </PageWrap>
  )
}