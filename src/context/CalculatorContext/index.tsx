import {
  createContext,
  Dispatch,
  memo,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { ChildrenProps } from '../../types/ChildrenProps';
import { BaseOffer } from '../../types/BaseOffer';
import { Item } from '../../types/Item';

interface CalculatorState {
  selectedBase: BaseOffer | null;
  setSelectedBase: Dispatch<SetStateAction<BaseOffer | null>>;
  selectedYear: string | null;
  setSelectedYear: Dispatch<SetStateAction<string | null>>;
  selectedItem: Item | null;
  setSelectedItem: Dispatch<SetStateAction<Item | null>>;
  basket: Item[];
  setBasket: Dispatch<SetStateAction<Item[]>>;
}

export const calculatorContext = createContext<CalculatorState | null>(null);

const { Provider } = calculatorContext;

export const CalculatorProvider = memo(({ children }: ChildrenProps) => {
  const [selectedBase, setSelectedBase] = useState<BaseOffer | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [basket, setBasket] = useState<Item[]>([]);
  return (
    <Provider
      value={{
        selectedBase,
        setSelectedBase,
        selectedYear,
        setSelectedYear,
        selectedItem,
        setSelectedItem,
        basket,
        setBasket,
      }}
    >
      {children}
    </Provider>
  );
});

export const useCalculatorContext = () => {
  const calculatorState = useContext(calculatorContext);

  if (!calculatorState) {
    throw new Error('You have to add CalculatorProvider');
  }

  return {
    ...calculatorState,
  };
};
