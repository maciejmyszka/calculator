import { ChildrenProps } from '../../types/ChildrenProps';
import { Flex } from '@chakra-ui/react';

export const ElementsContainer = ({ children }: ChildrenProps) => (
  <Flex
    flexWrap='wrap'
    justifyContent='center'
    gap={['1rem', '1rem', '2rem', '3rem', '4rem']}
  >
    {children}
  </Flex>
);
