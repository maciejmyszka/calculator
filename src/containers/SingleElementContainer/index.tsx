import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends FlexProps {
  children: ReactNode | ReactNode[];
}

export const SingleElementContainer = ({ children, ...rest }: Props) => (
  <Flex
    flexDirection='column'
    cursor='pointer'
    padding={['0.5rem 1rem', '1rem 2rem']}
    borderRadius='0.5rem'
    border='2px solid #eeeeee'
    justifyContent='center'
    _hover={{
      backgroundColor: '#EFF3F3',
    }}
    {...rest}
  >
    {children}
  </Flex>
);
