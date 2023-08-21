import { Flex } from '@chakra-ui/react';
import Loader from '../../components/Loader';

export const LoadingPage = () => (
  <Flex width='100vw' height='100vh' position='relative'>
    <Loader />
  </Flex>
);
