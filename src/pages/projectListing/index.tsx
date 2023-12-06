import { Flex, Text, Button, Box, Img } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Header from "@/src/components/LandingPage/Header";
import DesingCard from "../../assets/designCard.svg";
import Image from "next/image";
import { useState } from "react";
import { dadosProjetos } from "./data";

export default function ProjectListing() {
  const [projetos, setProjetos] = useState(dadosProjetos);

  const handleButtonClick = (id: number) => {
    setProjetos((prevProjetos) =>
      prevProjetos.map((proj) =>
        proj.id === id ? { ...proj, cadastro: !proj.cadastro } : proj
      )
    );
  };

  return (
    <>
      <Header showLink={true} showButton={false} showUser={true} />
      <Flex
        ps="fixed"
        justifyContent={{
          sm: "center",
          md: "center",
          lg: "flex-start",
          xl: "flex-start",
        }}
        pl="12vw"
        pr={{ sm: "4rem", lg: "8rem", xl: "8rem" }}
        pt="4rem"
      >
        <Flex
          flexDirection="column"
          alignItems={{
            sm: "center",
            md: "center",
            lg: "flex-start",
            xl: "flex-start",
          }}
        >
          <Text as="b" fontSize="20px">
            Categoria de projetos populares:
          </Text>

          <Box
            display="flex"
            flexWrap="wrap"
            pt={5}
            pb={10}
            gap={8}
            justifyContent={{
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
            }}
          >
            {/* Box que engloba todos os cards */}
            {projetos.map((projeto) => (
              <Box
                key={projeto.id}
                w="219px"
                h="250px"
                boxShadow="lg"
                borderRadius="12px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-around"
              >
                {/* inicio de cada card */}

                <Image src={DesingCard} alt="Design curvado do card" />
                <Img
                  style={{ marginTop: "-5rem", marginLeft: "2rem" }}
                  src={projeto.imagem}
                  alt="Imagem do card projetos"
                  width="100px"
                  height="100px"
                  borderRadius="full"
                />
                <Box display="flex" flexWrap="wrap" pl={5} pr={5}>
                  <Text as="b" w="full" fontSize="16px">
                    {projeto.titulo}
                  </Text>
                  <Box>
                    <Flex color="black">
                      {Array.from({ length: projeto.estrelas }).map(
                        (_, index) => (
                          <StarIcon key={index} />
                        )
                      )}
                      {Array.from({ length: 5 - projeto.estrelas }).map(
                        (_, index) => (
                          <StarIcon key={index} color="gray.400" />
                        )
                      )}
                    </Flex>
                  </Box>
                </Box>
                <Button
                  w="10rem"
                  borderRadius="8px"
                  bg={projeto.cadastro ? "#FF8500" : "#FFF"}
                  color={projeto.cadastro ? "black" : "black"}
                  border={projeto.cadastro ? "none" : "1px solid #5A189A"}
                  _hover={{ opacity: 0.8 }}
                  onClick={() => handleButtonClick(projeto.id)}
                >
                  {projeto.cadastro ? "Cadastrado" : "Cadastrar"}
                </Button>
              </Box>
            ))}
          </Box>

          <Text as="b" fontSize="20px">
            Categoria de projetos cadastrados:
          </Text>

          <Box
            display="flex"
            flexWrap="wrap"
            pt={5}
            pb={10}
            gap={8}
            justifyContent={{
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
            }}
          >
            {/* Box que engloba todos os cards */}
            {projetos.map((projeto) => {
              return (
                projeto.cadastro && (
                  <Box
                    key={projeto.id}
                    w="219px"
                    h="250px"
                    boxShadow="lg"
                    borderRadius="12px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    {/* inicio de cada card */}

                    <Image
                      src={DesingCard}
                      alt="Design curvado do card"
                      priority
                    />
                    <Img
                      style={{ marginTop: "-5rem", marginLeft: "2rem" }}
                      src={projeto.imagem}
                      alt="Imagem do card projetos"
                      width="100px"
                      height="100px"
                      borderRadius="full"
                    />
                    <Box display="flex" flexWrap="wrap" pl={5} pr={5}>
                      <Text as="b" w="full" fontSize="16px">
                        {projeto.titulo}
                      </Text>
                      <Box>
                        <Flex color="black">
                          {Array.from({ length: projeto.estrelas }).map(
                            (_, index) => (
                              <StarIcon key={index} />
                            )
                          )}
                          {Array.from({ length: 5 - projeto.estrelas }).map(
                            (_, index) => (
                              <StarIcon key={index} color="gray.400" />
                            )
                          )}
                        </Flex>
                      </Box>
                    </Box>
                    <Button
                      w="10rem"
                      borderRadius="8px"
                      bg={projeto.cadastro ? "#FF8500" : "#FFF"}
                      color={projeto.cadastro ? "black" : "black"}
                      border={projeto.cadastro ? "none" : "1px solid #5A189A"}
                      _hover={{ opacity: 0.8 }}
                      onClick={() => handleButtonClick(projeto.id)}
                    >
                      {projeto.cadastro ? "Cadastrado" : "Cadastrar"}
                    </Button>
                  </Box>
                )
              );
            })}
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
