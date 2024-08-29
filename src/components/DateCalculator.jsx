import { useState } from "react";
import { Box, Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState(null);

  const calculateDifference = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.abs(end - start);
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    setResult(days);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">Date Calculator</Heading>
        <Text>Calculate the number of days between two dates</Text>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Start Date"
        />
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="End Date"
        />
        <Button colorScheme="teal" onClick={calculateDifference}>Calculate</Button>
        {result !== null && (
          <Box>
            <Text fontSize="xl">Result: {result} days</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default DateCalculator;