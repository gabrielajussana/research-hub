import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImageLandingPage from "../../assets/image-landing-page.svg";
import Image from "next/image";

export default function LandingPage() {
  const qualities = ["Colaboração", "Inovação", "Conectividade", "Eficiência"];
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      h="full"
      gap="16px"
      mb="50px"
      py={{ base: 6, md: 50 }}
      px={{ base: 6, md: 300 }}
    >
      <Heading textAlign="center">
        Transforme sua pesquisa em colaboração, transforme ideias em inovação.
      </Heading>
      <Text textAlign="center">
        Nossa comunidade reúne mentes brilhantes, pesquisadores e cientistas de
        todas as disciplinas, proporcionando um ambiente dinâmico para a
        transformação de ideias em descobertas impactantes.
      </Text>
      <Image src={ImageLandingPage} alt="" width={400} height={400} />
      <Flex
        gap={{ base: "16px", md: "50px" }}
        flexDir={{ base: "column", md: "row" }}
        justifyContent="center"
        w="full"
      >
        {qualities.map((quality, index) => (
          <Box
            key={index}
            bg="#C3A9DC"
            p={3}
            _hover={{ transform: "scale(1.1)", color: "white", bg: "#5A189A" }}
            w={{ base: "full", md: "200px" }}
            textAlign="center"
          >
            {quality}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
