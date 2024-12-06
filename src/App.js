import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ChakraProvider, VStack, Text } from '@chakra-ui/react'
import Form from './Form';

function App() {

  return (
      <VStack bg='#f8f5f5' height='100%' minHeight={{md: '100vh'}}>
        <Form/>
      </VStack>
  );
}

export default App;
