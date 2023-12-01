import LogoResearchhub from "../../assets/logo-research-hub.png";
import ImgUser from "../../assets/imgUser.png";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

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
  const isMobile = useBreakpointValue({ base: true, md: false });
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
        <Menu>
          <MenuButton
            as={Button}
            bg="none"
            borderRadius="full"
            boxSize="100px"
            _hover={{ opacity: 0.8 }}
          >
            {isMobile ? (
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                color="#5A189A"
              />
            ) : (
              <Image src={ImgUser} alt="Imagem do usuário" />
            )}
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile" color="#5A189A">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help" color="#5A189A">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
}
