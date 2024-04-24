import { Box, Button, Container, Heading, Input, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaUpload, FaEye } from "react-icons/fa";

import { useState } from "react";

const Index = () => {
  const toast = useToast();
  const [decodedImageUrl, setDecodedImageUrl] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("https://colab.research.google.com/drive/1_-k_0NpGouhHurBTZyF-jiTruUHJ2K3Y?usp=sharing", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        setDecodedImageUrl(data.decodedImageUrl);

        toast({
          title: "File Uploaded and Processed",
          description: "Your file has been uploaded and processed. The decoded image is now displayed.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "There was an error processing your file.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
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
        <Image src={decodedImageUrl || "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZWNvZGVkJTIwaW1hZ2UlMjBkaXNwbGF5fGVufDB8fHx8MTcxMzkyNjk0NXww&ixlib=rb-4.0.3&q=80&w=1080"} alt="Decoded Image" />
      </VStack>
    </Container>
  );
};

export default Index;
