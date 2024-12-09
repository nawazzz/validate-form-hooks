import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ChakraProvider, VStack, Text } from '@chakra-ui/react'
import Form from './Form';
import { Switch, Route, Routes, useParams, Link } from 'react-router-dom';

function App() {

  return (
      <VStack bg='#f8f5f5' height='100%' minHeight={{md: '100vh'}}>
        <Routes>
          <Route
            exact 
            path='/'
            Component={() => <Form />}
          />
        </Routes>
      </VStack>
  );
}

export default App;
