// import React from 'react'
import { VStack, Container, Text, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log('products', products);
  return (
    <Container maxW={'1180'} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={35}
          fontWeight={'bold'}
          bgGradient={'Linear(to-r, purple.400, purple.500)'}
          bgClip={'text'}
          textAlign={'center'}
        >
          Current Recipes
        </Text>

        {/* MAIN GRID */}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={'full'}
        >
          {[
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            )),
          ]}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
            fontSize={'xl'}
            textAlign={'center'}
            fontWeight={'bold'}
            color={'red.500'}
          >
            No Products Found
            <Link to={'/create'}>
              <Text
                as="span"
                color="green.400"
                _hover={{ textDecoration: 'underline' }}
              >
                Upload Your Recipe
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
