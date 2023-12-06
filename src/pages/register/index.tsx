import Header from "@/src/components/LandingPage/Header";
import React from "react";
import {
  Flex,
  Alert,
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  AlertIcon,
  SimpleGrid,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import peopleSearch from "../../assets/people-search-amico.svg";
import useCustomForm from "./useForm";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "name",
    placeholder: "Nome e Sobrenome",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "user@exemplo.com",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
    placeholder: "Pelo menos 8 caracteres",
  },
];

export default function Register() {
  const [showAlert, setShowAlert] = React.useState(false);
  const nameProps = useCustomForm({ type: "name" });
  const emailProps = useCustomForm({ type: "email" });
  const passwordProps = useCustomForm({ type: "password" });
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nameValue = nameProps.value;
    const emailValue = emailProps.value;
    const passwordValue = passwordProps.value;

    console.log("Nome:", nameValue);
    console.log("Email:", emailValue);
    console.log("Senha:", passwordValue);
  };
  const handleClick = () => {
    setShowAlert(true);

    // Adicione aqui a lógica para limpar os campos do formulário se necessário.
  };

  return (
    <>
      <Flex alignItems="left">
        <Header showLink={false} showButton={false} showUser={false} />
      </Flex>
      <SimpleGrid
        ml={{ sm: "1rem" }}
        spacing={5}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, minmax(800px, 1fr))",
        }}
        overflow="hidden"
      >
        <Box>
          {isSmallerThan800 ? null : (
            <Image
              src={peopleSearch.src}
              alt="People Search"
              width={800}
              height={800}
            />
          )}
        </Box>
        <Box justifyContent="center" alignItems="center">
          <Text fontWeight={700} fontSize={60} mb="2rem">
            Cadastro
          </Text>
          <form onSubmit={handleSubmit}>
            {formFields.map(({ id, label, type, placeholder }) => (
              <FormControl key={id} ml="1rem">
                <FormLabel mt="1rem" htmlFor={id}>
                  {label}
                </FormLabel>
                <Input
                  size="lg"
                  w="70%"
                  id={id}
                  type={type}
                  value={
                    type === "name"
                      ? nameProps.value
                      : type === "email"
                      ? emailProps.value
                      : passwordProps.value
                  }
                  onChange={
                    type === "name"
                      ? nameProps.onChange
                      : type === "email"
                      ? emailProps.onChange
                      : passwordProps.onChange
                  }
                  onBlur={
                    type === "name"
                      ? nameProps.onBlur
                      : type === "email"
                      ? emailProps.onBlur
                      : passwordProps.onBlur
                  }
                  focusBorderColor="orange.400"
                  placeholder={placeholder}
                />
                {type === "name" && nameProps.error && (
                  <Text color="red.500">{nameProps.error}</Text>
                )}
                {type === "email" && emailProps.error && (
                  <Text color="red.500">{emailProps.error}</Text>
                )}
                {type === "password" && passwordProps.error && (
                  <Text w="65%" color="red.500">
                    {passwordProps.error}
                  </Text>
                )}
              </FormControl>
            ))}
            <Text mt=".5rem" ml="1rem" fontWeight={600}>
              Já tem conta?
              <Link style={{ color: "#5A189A" }} href="/login">
                {" "}
                Entrar
              </Link>
            </Text>
            <Button
              boxShadow="lg"
              type="submit"
              width="55%"
              size="lg"
              m={55}
              bg="#FF8500"
              borderRadius="8px"
              _hover={{ opacity: 0.8 }}
              onClick={handleClick}
            >
              Cadastrar
            </Button>
            {showAlert && (
              <Alert status="success">
                <AlertIcon />
                Cadastro realizado com sucesso!
              </Alert>
            )}
          </form>
        </Box>
      </SimpleGrid>
    </>
  );
}
