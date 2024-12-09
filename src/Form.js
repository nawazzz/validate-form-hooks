import React from 'react'
import {  Input, Heading, Flex, Button } from '@chakra-ui/react'
import InputComponent from './InputComponent'
import { useState } from 'react'

const Form = () => {

    const [inputEmailValue, setInputEmailValue] = useState('')
    const [inputPhoneValue, setInputPhoneValue] = useState('')
    const [inputNameValue, setInputNameValue] = useState('')
    const [inputAgeValue, setInputAgeValue] = useState('')
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [nameErrorMessage, setNameErrorMessage] = useState('')
    const [ageErrorMessage, setAgeErrorMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('Please enter the required details.')

    const handleInputChange = (event) => {
        console.log('lelele', event)
        if (event.target.name === 'email') {
            setInputEmailValue(event.target.value)
        }   
        if (event.target.name === 'phone') {
            setInputPhoneValue(event.target.value)
        }  
        if (event.target.name === 'name') {
            setInputNameValue(event.target.value)
        }  
        if (event.target.name === 'age') {
            setInputAgeValue(event.target.value)
        }
    }

    const handleFocusOutInput = (event) => {
        console.log(event)
        let currentErrorMessage = ''
        if (event.target.name === 'phone') {
            let phoneNumber = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
            if (inputPhoneValue.length === 0) {
                currentErrorMessage = 'Please enter a phone number'
                setPhoneErrorMessage(currentErrorMessage)
            }
            if ((inputPhoneValue.length > 0) && (inputPhoneValue.length < 10)) {
                currentErrorMessage = 'Phone number is too short'
                setPhoneErrorMessage(currentErrorMessage)
            }
            if (inputPhoneValue.length > 0 && !inputPhoneValue.match(phoneNumber)) {
                currentErrorMessage = 'Phone number is invalid, please enter a valid phone number'
                setPhoneErrorMessage(currentErrorMessage)
            }
        }
        if (event.target.name === 'email') {
            if (inputEmailValue.length === 0) {
                currentErrorMessage = 'Please enter an E-mail'
                setEmailErrorMessage(currentErrorMessage)
            }
            if (inputEmailValue.length && !inputEmailValue.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                currentErrorMessage = 'Email address in invalid'
                setEmailErrorMessage(currentErrorMessage)    
            }
        }
        if (event.target.name === 'name') {
            if (inputNameValue.length === 0) {
                currentErrorMessage = 'Please enter your name'
                setNameErrorMessage(currentErrorMessage)
            }
        }
        if (event.target.name === 'age') {
            let checkAge = /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/
            if (inputAgeValue.length === 0) {
                currentErrorMessage = 'Please enter your age'
                setAgeErrorMessage(currentErrorMessage)
            }
            if (inputAgeValue.length && !inputAgeValue.toLowerCase().match(checkAge)) {
                currentErrorMessage = 'Invalid age'
                setAgeErrorMessage(currentErrorMessage)
            }            

        }
        
    }

    const handleFocusInInput = (event) => {
        console.log('focusIn')
        if (event.target.name === 'email') {
            setEmailErrorMessage('')
        }
        if (event.target.name === 'phone') {
            setPhoneErrorMessage('')
        }
        if (event.target.name === 'name') {
            setNameErrorMessage('')
        }
        if (event.target.name === 'age') {
            setAgeErrorMessage('')
        }
    }

    const handleButton = (event) => {
        console.log(event)
        if (!inputAgeValue.length && !inputEmailValue.length && !inputNameValue.length && !inputPhoneValue.length) {
            setEmailErrorMessage(errorMessage)
            setPhoneErrorMessage(errorMessage)
            setNameErrorMessage(errorMessage)
            setAgeErrorMessage(errorMessage)
        }
    }
    
  return (
    <Flex 
        w='100%'
        bg='#f8f5f5'
        p='50px' 
        flexDir='column' 
        justifyContent='center'
        alignItems='center'
    >
        <Heading w='100%' textAlign={{base: 'left', md: 'center'}}>Form Validation</Heading>
        <Flex flexDir='column' justifyContent='center' alignItems='center' w='100%'>
            <Flex gap={{base: '50px', md: '200px'}} w='100%'
                py='50px' flexDir={{md: 'row', base: 'column'}}
                justifyContent='center'
            >
                <InputComponent 
                    title='Email' name='email' placeholder='Email' value={inputEmailValue}
                    handleChange={(event) => handleInputChange(event)} 
                    handleFocusInInput={(event) => handleFocusInInput(event)}
                    handleBlurEvent={(event) => handleFocusOutInput(event)}
                    errorMessage={emailErrorMessage}
                />      
                <InputComponent 
                    title='Phone number' name='phone' placeholder='Phone' value={inputPhoneValue}
                    handleChange={(event) => handleInputChange(event)} 
                    handleFocusInInput={(event) => handleFocusInInput(event)}
                    handleBlurEvent={(event) => handleFocusOutInput(event)}  
                    errorMessage={phoneErrorMessage}              
                />          
            </Flex> 
            <Flex gap={{base: '50px', md: '200px'}} w='100%'
                py={{md: '50px'}} flexDir={{md: 'row', base: 'column'}}
                justifyContent='center'
            >
                <InputComponent 
                    title='Name' name='name' placeholder='Name' value={inputNameValue}
                    handleChange={(event) => handleInputChange(event)} 
                    handleFocusInInput={(event) => handleFocusInInput(event)}
                    handleBlurEvent={(event) => handleFocusOutInput(event)}
                    errorMessage={nameErrorMessage}
                />      
                <InputComponent 
                    title='Age' name='age' placeholder='Age' value={inputAgeValue}
                    handleChange={(event) => handleInputChange(event)} 
                    handleFocusInInput={(event) => handleFocusInInput(event)}
                    handleBlurEvent={(event) => handleFocusOutInput(event)}
                    errorMessage={ageErrorMessage}
                /> 
            </Flex>
            <Button 
                fontSize='15px' fontWeight='700' 
                w={{base: '100%', md: 'fit-content'}} mt='50px'
                onClick={handleButton}
            >Submit</Button>
        </Flex>
    </Flex>
  )
}

export default Form
