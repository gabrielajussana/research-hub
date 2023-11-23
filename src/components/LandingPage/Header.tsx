import LogoResearchhub from "../../assets/logo-research-hub.png";
import Image from "next/image";
import { Button, Flex, Heading, Link } from "@chakra-ui/react";

interface HeaderProps {
  showLinksAndButton?: boolean;
}

export default function Header({ showLinksAndButton = true }: HeaderProps) {
  return (
    <Flex h="10vh" justifyContent="space-around" alignItems="center" p={4}>
      <Flex alignItems="center">
        <Image src={LogoResearchhub} alt="" width={40} height={40} />
        <Heading size="md">
          Research<span style={{ color: "#FF8500" }}>Hub</span>
        </Heading>
      </Flex>
      {showLinksAndButton && (
        <Flex gap="40px" display={{ base: "none", md: "flex" }}>
          <Link>Home</Link>
          <Link>Projetos</Link>
          <Link>Perfil</Link>
        </Flex>
      )}
      {showLinksAndButton && (
        <Button
          color="white"
          bg="#5A189A"
          borderRadius="8px"
          _hover={{ opacity: 0.8 }}
        >
          Login / Cadastro
        </Button>
      )}
    </Flex>
  );
}
