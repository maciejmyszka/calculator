import { Button, Flex } from '@chakra-ui/react';

export const Loader = () => (
  <Flex width='100%' justifyContent='center'>
    <Button isLoading bg='transparent' color='white'></Button>
  </Flex>
);

export default Loader;
