import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Divider, SimpleGrid } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" justify="space-between" align="center" mb={8} p={4} bg="gray.100" borderRadius="md">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <VStack spacing={8} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h2" size="md">Blog Post Title 1</Heading>
              <Text fontSize="sm" color="gray.500">January 1, 2023</Text>
              <Text mt={2}>This is a short excerpt from the blog post...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h2" size="md">Blog Post Title 2</Heading>
              <Text fontSize="sm" color="gray.500">February 1, 2023</Text>
              <Text mt={2}>This is a short excerpt from the blog post...</Text>
            </Box>
            {/* Add more blog posts as needed */}
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#">Recent Post 1</Link>
            <Link href="#">Recent Post 2</Link>
            <Link href="#">Recent Post 3</Link>
            {/* Add more recent posts as needed */}
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" mt={16} p={4} bg="gray.100" borderRadius="md">
        <Divider mb={4} />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Text>&copy; 2023 My Blog. All rights reserved.</Text>
          <HStack spacing={4} justify={{ base: "center", md: "flex-end" }}>
            <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
            <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
            <Link href="https://instagram.com" isExternal><FaInstagram /></Link>
          </HStack>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;