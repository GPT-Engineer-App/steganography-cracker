import { Box, Button, Container, Heading, Input, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaUpload, FaEye } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      toast({
        title: "File Uploaded",
        description: "Your file has been uploaded and will be processed.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDecode = () => {
    toast({
      title: "Decoding Image",
      description: "We are now decoding the hidden messages in your image.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Image Steganography Decoder
        </Heading>
        <Text>Upload an image to decode hidden messages based on various steganography techniques.</Text>
        <Box>
          <Input type="file" accept="image/*" onChange={handleFileUpload} hidden id="file-upload" />
          <Button leftIcon={<FaUpload />} colorScheme="teal" onClick={() => document.getElementById("file-upload").click()}>
            Upload Image
          </Button>
        </Box>
        <Button leftIcon={<FaEye />} colorScheme="blue" onClick={handleDecode}>
          Decode Image
        </Button>
        <Image src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZWNvZGVkJTIwaW1hZ2UlMjBkaXNwbGF5fGVufDB8fHx8MTcxMzkyNjk0NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Decoded Image" />
      </VStack>
    </Container>
  );
};

export default Index;
