import { Button, Text } from '@chakra-ui/react';
import { FallbackProps } from 'react-error-boundary';

export const ErrorBoundary = ({ error, resetErrorBoundary }: FallbackProps) => (
  <>
    <Text>{`Wystąpił błąd: ${error?.message ?? ''}`}</Text>
    <Button onClick={resetErrorBoundary}>Spróbuj ponownie</Button>
  </>
);
