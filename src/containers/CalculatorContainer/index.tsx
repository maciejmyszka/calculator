import { ChildrenProps } from '../../types/ChildrenProps';
import { Flex } from '@chakra-ui/react';
import { PageContanier } from '../PageContanier';

export const CalculatorContainer = ({ children }: ChildrenProps) => (
  <PageContanier>
    <Flex
      width='100%'
      flexDirection='column'
      padding={['1rem 2.5rem', '2rem 5rem']}
      boxSizing='border-box'
      gap={['1rem', '2rem']}
      backgroundColor='#f7f7f7'
    >
      {children}
    </Flex>
  </PageContanier>
);
