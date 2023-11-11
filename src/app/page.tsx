import { Flex } from "@chakra-ui/react";
import Header from "../components/LandingPage/Header";
import LandingPage from "../components/LandingPage/LandingPage";
import Footer from "../components/LandingPage/Footer";

export default function Home() {
  return (
    <Flex flexDir="column" w="full" h={{ base: "100%", md: "100vh" }}>
      <Header />
      <LandingPage />
      <Footer />
    </Flex>
  );
}
