import Head from "next/head";
import {
  Container,
  Heading,
  Table,
  Td,
  Th,
  Tr,
  Thead,
  Tbody,
  Spinner,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useFetchProducts } from "@/features/product/useFetchProducts";
import { useFormik } from "formik";

export default function Home() {
  const { data, isLoading, isError, error } = useFetchProducts();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      image: "",
    },
  });

  const handleFormInput = (event) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };

  const renderProducts = () => {
    return data?.map((product) => (
      <Tr key={product.id}>
        <Td>{product.id}</Td>
        <Td>{product.name}</Td>
        <Td>{product.price}</Td>
        <Td>{product.description}</Td>
        <Td>{product.image}</Td>
      </Tr>
    ));
  };

  if (isError) return <Text>An error has occurred: {error.message}</Text>;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Heading>Hello World</Heading>
          {isLoading ? (
            <Box textAlign="center">
              <Spinner size="xl" />
            </Box>
          ) : (
            <Table mb="6">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Description</Th>
                  <Th>Image</Th>
                </Tr>
              </Thead>
              <Tbody>{renderProducts()}</Tbody>
            </Table>
          )}
          <form>
            <VStack spacing="3">
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input onChange={handleFormInput} type="text" name="name" />
              </FormControl>
              <FormControl>
                <FormLabel>Product price</FormLabel>
                <Input onChange={handleFormInput} type="text" name="price" />
              </FormControl>
              <FormControl>
                <FormLabel>Product description</FormLabel>
                <Input
                  onChange={handleFormInput}
                  type="text"
                  name="description"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Product image</FormLabel>
                <Input onChange={handleFormInput} type="text" name="image" />
              </FormControl>
              <Button type="submit">Add Product</Button>
            </VStack>
          </form>
        </Container>
      </main>
    </>
  );
}