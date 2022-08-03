import React from "react";
import {
  Text,
  Stack,
  HStack,
  Image,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

function Detail({ exerciseDetail }) {
  const { name, target, gifUrl, bodyPart, equipment } = exerciseDetail;
  const extraDetail = [
    {
      name: bodyPart,
      icon: "/icons/body-part.png",
    },
    {
      name: target,
      icon: "/icons/target.png",
    },
    {
      name: equipment,
      icon: "/icons/equipment.png",
    },
  ];
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        gap: {
          xs: "10px",
          md: "30px",
          lg: "50px",
        },
        p: "20px",
        alignItems: "center",
      }}
    >
      <Image
        src={gifUrl}
        alt={name}
        loading="lazy"
        width="729px"
        height="742px"
        boxShadow="2xl"
        borderRadius="20px"
      />
      <Stack
        sx={{
          gap: {
            xs: "10px",
            sm: "18px",
            md: "25px",
            lg: "35px",
          },
        }}
      >
        <Heading textTransform="capitalize">{name}</Heading>
        <Text fontSize="medium" textTransform="capitalize">
          Exercises keep you strong. <em>{name}</em> is one of the best
          exercises to target your <em>{target}</em>. It will help you improve
          your mood and gain energy.
        </Text>
        {extraDetail.map((item, index) => (
          <HStack key={index} gap="24px" alignItems="center">
            <Image
              src={item.icon}
              alt={item.name}
              boxShadow="xl"
              p="10px"
              borderRadius="15px"
              bg={useColorModeValue("", "white")}
            />
            <Text textTransform="capitalize" fontSize="lg">
              {item.name}
            </Text>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Detail;
