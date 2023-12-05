import LogoResearchhub from "../../assets/logo-research-hub.png";
import ImgUser from "../../assets/ImgUser.png";
import Image from "next/image";
import { Button, Flex, Heading, Link } from "@chakra-ui/react";

interface HeaderProps {
  showButton?: boolean;
  showLink?: boolean;
  showUser?: boolean;
}

export default function Header({
  showLink = true,
  showButton = true,
  showUser = false,
}: HeaderProps) {
  return (
    <Flex h="10vh" justifyContent="space-around" alignItems="center" p={4}>
      <Flex alignItems="center">
        <Image src={LogoResearchhub} alt="" width={40} height={40} />
        <Heading size="md">
          Research<span style={{ color: "#FF8500" }}>Hub</span>
        </Heading>
      </Flex>
      {showLink && (
        <Flex gap="40px" display={{ base: "none", md: "flex" }}>
          <Link>Home</Link>
          <Link>Projetos</Link>
          <Link>Perfil</Link>
        </Flex>
      )}
      {showButton && (
        <Button
          color="white"
          bg="#5A189A"
          borderRadius="8px"
          _hover={{ opacity: 0.8 }}
        >
          Login / Cadastro
        </Button>
      )}
      {showUser && (
        <Button
          bg="none"
          borderRadius="full"
          boxSize="100px"
          _hover={{ opacity: 0.8 }}
        >
          <Image src={ImgUser} alt="Imagem do usuário" />
        </Button>
      )}
    </Flex>
  );
}
