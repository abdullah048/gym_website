import React from "react";
import {
  Box,
  VStack,
  Heading,
  HStack,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box marginY="40px" bg={useColorModeValue("gray.400", "gray.700")} p="20px">
      <VStack justify="center" align="center">
        <Image
          src="/images/abdullah.jpeg"
          alt="profile"
          borderRadius="100%"
          width="80px"
          height="80px"
          border="1px solid white"
        />
        <Heading as="h4" size="md">
          Made with ❤️ by craftzFox
        </Heading>
        <HStack display="flex" columnGap="25px" style={{ marginTop: "30px" }}>
          <span>
            Follow me on social media{" "}
            <Link
              href="https://craftzfox-biolinks.netlify.app/"
              color={useColorModeValue("blue.500", "purple.500")}
              _hover={{
                textDecoration: "none",
                color: "white",
              }}
            >
              @craftzFox
            </Link>
          </span>
        </HStack>
      </VStack>
    </Box>
  );
}
