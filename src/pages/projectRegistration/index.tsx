import Header from "@/src/components/LandingPage/Header";
import React, { useState } from "react";
import {
  Text,
  SimpleGrid,
  Image,
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import peopleShow from "../../assets/peopleShow.png";
import categoriasData from "./data";

export default function projectRegistration() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<
    string | null
  >(null);

  const handleCategoriaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategoriaSelecionada(event.target.value);
  };

  return (
    <>
      <Header showLink={true} showButton={false} showUser={true} />
      <SimpleGrid
        spacing={5}
        ml={{ base: "8vw", md: "0px" }}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, minmax(800px, 1fr))",
        }}
        gap={0}
      >
        <Box>
          {isSmallerThan800 ? null : (
            <Image
              src={peopleShow.src}
              alt="People Search"
              width="40vw"
              height="auto"
            />
          )}
        </Box>
        <Box ml={{ md: "-8rem" }} justifyContent="center" alignItems="center">
          <Text fontWeight={700} fontSize={45} mb="2rem">
            Publicar Projeto
          </Text>
          <Grid
            h="60vh"
            templateRows="repeat(5 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={3}
          >
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Categoria</FormLabel>
                <Select
                  fontSize={14}
                  fontWeight={600}
                  color="#FF8500"
                  placeholder="Selecione uma categoria"
                  onChange={handleCategoriaChange}
                  focusBorderColor="#FF8500"
                  boxShadow="md"
                  value={categoriaSelecionada || undefined}
                >
                  {categoriasData.map((categoria, index) => (
                    <option key={index}>{categoria.categoria}</option>
                  ))}
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Subcategoria</FormLabel>
                <Select
                  fontSize={14}
                  fontWeight={600}
                  color="#FF8500"
                  placeholder="Selecione uma subcategoria"
                  focusBorderColor="#FF8500"
                  boxShadow="md"
                >
                  {categoriaSelecionada &&
                    categoriasData
                      .find(
                        (categoria) =>
                          categoria.categoria === categoriaSelecionada
                      )
                      ?.subcategorias.map((subcategoria, index) => (
                        <option key={index}>{subcategoria}</option>
                      ))}
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl>
                <FormLabel>Título do Projeto</FormLabel>
                <Input
                  fontSize={14}
                  fontWeight={600}
                  textAlign="center"
                  placeholder="Nome do Projeto"
                  type="text"
                  focusBorderColor="#FF8500"
                  boxShadow="md"
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormLabel>Descrição do Projeto</FormLabel>
              <Textarea
                placeholder="Digite seu texto aqui..."
                size="md"
                resize="vertical"
                focusBorderColor="#FF8500"
                boxShadow="md"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                boxShadow="md"
                type="file"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0];
                  // Faça algo com o arquivo selecionado, por exemplo, armazene em um estado ou envie para o servidor
                  console.log(selectedFile);
                }}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Duração</FormLabel>
                <Select
                  focusBorderColor="#FF8500"
                  boxShadow="md"
                  placeholder="Selecione a duração"
                >
                  <option>1 semana</option>
                  <option>2 semanas</option>
                  <option>3 semanas</option>
                  <option>1 mês</option>
                  <option>Tempo indefinido</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={4} display="flex" justifyContent="end">
              <Button
                type="submit"
                width="35%"
                mt={5}
                size="md"
                bg="#FF8500"
                borderRadius="8px"
                boxShadow="md"
                _hover={{ opacity: 0.8 }}
              >
                Continue
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </SimpleGrid>
    </>
  );
}
