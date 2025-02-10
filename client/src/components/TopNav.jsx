// import React from 'react'
import {
  Button,
  Container,
  Flex,
  HStack,

  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

const TopNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Text
          fontSize={{ base: '22', sn: '28' }}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          textAlign={'center'}
          bgGradient="linear(to-r,rgb(181, 137, 224),rgb(225, 85, 155))"
          bgClip="text"
        >
          <Link to={'/'}>Dessert Recipes</Link>
        </Text>

        <HStack spacing={2} alignItems={'center'}>
          <Link to={'/create'}>
            <Button>
              <FaPlusCircle fontSize={20} />
            </Button>
          </Link>{' '}
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <FaMoon /> : <FiSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default TopNav;
