import { ChildrenProps } from '../../types/ChildrenProps';
import { Flex } from '@chakra-ui/react';

export const SelectionContainer = ({ children }: ChildrenProps) => (
  <Flex flexDirection='column' width='100%' gap={['1rem', '2rem']} mt='1rem'>
    {children}
  </Flex>
);
