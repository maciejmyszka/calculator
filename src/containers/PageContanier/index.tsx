import { ChildrenProps } from '../../types/ChildrenProps';
import { Box } from '@chakra-ui/react';

export const PageContanier = ({ children }: ChildrenProps) => (
  <Box
    width='100vw'
    height='100vh'
    overflowY='scroll'
    backgroundColor='#f7f7f7'
  >
    {children}
  </Box>
);
