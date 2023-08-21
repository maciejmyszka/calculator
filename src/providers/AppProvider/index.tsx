import { ChildrenProps } from '../../types/ChildrenProps';
import { LoadingPage } from '../../views/LoadingPage';
import { CalculatorProvider } from '../../context/CalculatorContext';
import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundaryProvider } from '../ErrorBoundaryProvider';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

export const AppProvider = ({ children }: ChildrenProps) => (
  <ChakraProvider>
    <ErrorBoundaryProvider>
      <Suspense fallback={<LoadingPage />}>
        <CalculatorProvider>
          {children}
          <ToastContainer />
        </CalculatorProvider>
      </Suspense>
    </ErrorBoundaryProvider>
  </ChakraProvider>
);
