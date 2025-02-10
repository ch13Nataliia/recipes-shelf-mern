import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';


import { useState } from 'react';


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  });

  const handleAddDessert = () => {
    console.log(newProduct);
  };
  return (
    <Container maxW={'lg'}>

      <VStack>

        <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>
          Add Your Recipe
        </Heading>

        <Box
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          p={6}
          rounded={'md'}
          shadow={'md'}
        >
          <VStack spacing={6}>
            <Input
              placeholder="Dessert title"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Input
              placeholder="Description"
              name="description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
            <Button colorScheme="yellow" onClick={handleAddDessert} w={'full'}>
              Add Recipe
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
