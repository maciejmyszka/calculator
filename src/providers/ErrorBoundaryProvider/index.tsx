import { ChildrenProps } from '../../types/ChildrenProps';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundary as Boundary } from '../../components/ErrorBoundary';

export const ErrorBoundaryProvider = ({ children }: ChildrenProps) => (
  <ErrorBoundary FallbackComponent={Boundary}>{children}</ErrorBoundary>
);
