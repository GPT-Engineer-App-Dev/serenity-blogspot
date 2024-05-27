import { useState } from "react";
import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Divider, SimpleGrid, Input, Textarea, Button, useColorMode, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    { title: "Blog Post Title 1", date: "January 1, 2023", content: "This is a short excerpt from the blog post..." },
    { title: "Blog Post Title 2", date: "February 1, 2023", content: "This is a short excerpt from the blog post..." }
  ]);

  const [newPost, setNewPost] = useState({ title: "", date: "", content: "" });
  const { colorMode, toggleColorMode } = useColorMode();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ title: "", date: "", content: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" justify="space-between" align="center" mb={8} p={4} bg={colorMode === "light" ? "gray.100" : "gray.700"} borderRadius="md">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <IconButton
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            isRound
            size="md"
            alignSelf="flex-end"
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>

      {/* Form to Add New Post */}
      <Box as="form" onSubmit={handleSubmit} mb={8} p={4} borderWidth="1px" borderRadius="md">
        <Heading as="h2" size="md" mb={4}>Add New Post</Heading>
        <VStack spacing={4} align="stretch">
          <Box>
            <Text mb={2}>Title</Text>
            <Input name="title" value={newPost.title} onChange={handleInputChange} required />
          </Box>
          <Box>
            <Text mb={2}>Date</Text>
            <Input name="date" value={newPost.date} onChange={handleInputChange} required />
          </Box>
          <Box>
            <Text mb={2}>Content</Text>
            <Textarea name="content" value={newPost.content} onChange={handleInputChange} required />
          </Box>
          <Button type="submit" colorScheme="blue">Add Post</Button>
        </VStack>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <VStack spacing={8} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h2" size="md">{post.title}</Heading>
                <Text fontSize="sm" color="gray.500">{post.date}</Text>
                <Text mt={2}>{post.content}</Text>
              </Box>
            ))}
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
      <Box as="footer" mt={16} p={4} bg={colorMode === "light" ? "gray.100" : "gray.700"} borderRadius="md">
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