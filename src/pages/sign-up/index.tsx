import Header from "@/src/components/LandingPage/Header";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import imgNotebook from "../../assets/imgNotebook.png";
import formFieldsSingUp from "../../components/sign-up/data";

export default function SignUp() {
  return (
    <>
      <Header showLink={true} showButton={false} showUser={true} />
      <SimpleGrid spacing={5} templateColumns="repeat(2, minmax(200px, 1fr))">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontWeight={700} fontSize={60} textAlign="center">
            Inscreva-se
          </Text>

          <form /* onSubmit={handleSubmit} */>
            {formFieldsSingUp.map(({ id, label, type, placeholder }) => (
              <FormControl
                key={id}
                ml="1rem"
                justifyContent="center"
                alignItems="center"
              >
                <FormLabel mt="1rem" htmlFor={id}>
                  {label}
                </FormLabel>
                <Input
                  size="lg"
                  w="100%"
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  boxShadow="md"
                  focusBorderColor="#FF8500"
                />
              </FormControl>
            ))}
            <Input
              mt={5}
              ml={4}
              size="lg"
              w="50%"
              boxShadow="md"
              type="file"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                console.log(selectedFile);
              }}
            />
            <Button
              type="submit"
              width="35%"
              size="lg"
              m={55}
              bg="#FF8500"
              borderRadius="8px"
              boxShadow="md"
              _hover={{ opacity: 0.8 }}
            >
              Inscrever
            </Button>
          </form>
        </Box>
        <Box>
          <Image
            src={imgNotebook.src}
            alt="People Search"
            width="auto"
            height="90vh"
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
