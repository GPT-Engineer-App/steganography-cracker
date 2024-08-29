import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue, Icon, Link } from "@chakra-ui/react";
import { FaGlobe, FaNewspaper, FaTwitter, FaLock, FaCalendarAlt } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const FeatureBox = ({ icon, title, description }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Box p={5} shadow="md" borderWidth="1px" bg={bg} borderRadius="lg">
        <Icon as={icon} w={10} h={10} mb={4} />
        <Heading fontSize="xl" mb={2}>{title}</Heading>
        <Text>{description}</Text>
      </Box>
    </motion.div>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} as="main">
        <Heading as="h1" size="2xl" textAlign="center" mb={6}>
          Conspiracy Theorists Hub
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={10}>
          Your one-stop destination for decoding hidden truths and exploring the unexplained
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="full">
          <FeatureBox
            icon={FaGlobe}
            title="Trending Conspiracies"
            description="AI-powered analysis of the latest global conspiracy trends"
          />
          <FeatureBox
            icon={FaNewspaper}
            title="Breaking News"
            description="Real-time updates on events that shape our world"
          />
          <FeatureBox
            icon={FaTwitter}
            title="Social Media Pulse"
            description="Track viral stories and theories across platforms"
          />
          <FeatureBox
            icon={FaLock}
            title="Steganography Decoder"
            description="Uncover hidden messages in images"
          />
          <FeatureBox
            icon={FaCalendarAlt}
            title="Date Calculator"
            description="Analyze time patterns and significant dates"
          />
        </SimpleGrid>
        <Box mt={10}>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Explore Our Tools:
          </Text>
          <Link as={RouterLink} to="/steganography" color="teal.500" mr={4}>
            Steganography Decoder
          </Link>
          <Link as={RouterLink} to="/date-calculator" color="teal.500">
            Date Calculator
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
