import React from "react";
import {
  chakra,
  Box,
  Flex,
  Badge,
  HStack,
  Link,
  Heading,
} from "@chakra-ui/react";

interface Post {
  title: string;
  publishDate: string;
  tags?: Array<string>;
  intro: string;
}

export interface PostProps {
  posts: Array<Post>;
}

const BlogPost = ({ posts }: PostProps) => {
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      flexDir={'column'}
      overflowX={'hidden'}
    >
      {posts ? posts.map((post) => (
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          maxW="2xl"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Heading
              fontSize="2xl"
              fontWeight="700"
            >
              {post.title}
            </Heading>
            <chakra.span
              fontSize="sm"
            >
              {post.publishDate}
            </chakra.span>
          </Flex>
          <Box mt={2}>
            <chakra.p mt={2}>
              {post.intro}
            </chakra.p>
          </Box>

          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Link
              _hover={{ textDecor: "underline" }}
              color={'blue.300'}
            >
              Read more
            </Link>
          </Flex>
          <Flex my={'1rem'}>
            {post.tags?.map((tag) => (
              <HStack>
                <Badge
                  colorScheme='purple'
                  fontSize="sm"
                  fontWeight="700"
                  rounded="md"
                  _hover={{ bg: "gray.500" }}
                  px={3}
                  py={1}
                  mr={2}
                >
                  {tag}
                </Badge>
              </HStack>
            ))}
          </Flex>
        </Box>
      )): null}
    </Flex>
  );
};

export default BlogPost;