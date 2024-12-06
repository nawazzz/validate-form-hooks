import React from 'react'
import { VStack, Input, Text, Flex } from '@chakra-ui/react'

const InputComponent = ({title, name, placeholder, errorMessage, onChange, handleChange, handleBlurEvent, handleFocusInInput, value}) => {

  return (
    <Flex flexDir='column' justifyContent='flex-start' gap='20px'>
        <Text fontSize='16px' fontWeight='700' textAlign='left'>{title}</Text>
        <Input
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlurEvent}
            onFocus={handleFocusInInput}
        />      
        {errorMessage && 
        <Text
            mt='-15px' color='#E60000' fontSize='10px' fontWeight='500' lineHeight='1.25rem' textAlign='left' verticalAlign='middle'
        >
            {errorMessage}
        </Text>}
    </Flex>
  )
}

export default InputComponent
