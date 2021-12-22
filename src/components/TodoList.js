import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge, Box } from '@chakra-ui/react';
import { FaTrash } from "react-icons/fa";
import React from 'react'

const TodoList = ({todos, deleteTodo}) => {

  if (!todos.length) {
    return (
      <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        No Todos, w00t!
      </Badge>
    )
  }

  return (
    <VStack
      alignItems='stretch'
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      borderRadius='lg'
      padding='4'
      w='100%'
      maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
    >
      {todos.map((todo) => {
        return(
          <HStack key={todo.id}>
            <Text>{todo.text}</Text>
            <Spacer />
            <IconButton
              icon={<FaTrash/>}
              isRound='true'
              onClick={() => deleteTodo(todo.id)}
            />
          </HStack>
        )
      })}
    </VStack>
  )
}

export default TodoList
