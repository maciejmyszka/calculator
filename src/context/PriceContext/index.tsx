import {
  createContext,
  Dispatch,
  memo,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { ChildrenProps } from '../../types/ChildrenProps';
import { DiscountCode } from '../../types/DiscountCode';

interface PriceState {
  codeValue: string;
  setCodeValue: Dispatch<SetStateAction<string>>;
  finalPrice: number;
  setFinalPrice: Dispatch<SetStateAction<number>>;
  finalRegularPrice: number;
  setFinalRegularPrice: Dispatch<SetStateAction<number>>;
  addedDiscountCode: DiscountCode | null;
  setAddedDiscountCode: Dispatch<SetStateAction<DiscountCode | null>>;
}

export const priceContext = createContext<PriceState | null>(null);

const { Provider } = priceContext;

export const PriceProvider = memo(({ children }: ChildrenProps) => {
  const [codeValue, setCodeValue] = useState<string>('');
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [finalRegularPrice, setFinalRegularPrice] = useState<number>(0);
  const [addedDiscountCode, setAddedDiscountCode] =
    useState<DiscountCode | null>(null);

  return (
    <Provider
      value={{
        codeValue,
        setCodeValue,
        finalPrice,
        setFinalPrice,
        finalRegularPrice,
        setFinalRegularPrice,
        addedDiscountCode,
        setAddedDiscountCode,
      }}
    >
      {children}
    </Provider>
  );
});

export const usePriceContext = () => {
  const priceState = useContext(priceContext);

  if (!priceState) {
    throw new Error('You have to add PriceProvider');
  }

  return {
    ...priceState,
  };
};
