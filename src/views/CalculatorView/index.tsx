import { CalculatorContainer } from '../../containers/CalculatorContainer';
import { SelectBaseOffer } from '../../components/SelectBaseOffer';
import { SelectYear } from '../../components/SelectYear';
import { SelectOffer } from '../../components/SelectOffer';
import { Basket } from '../../components/Basket';
import { PriceProvider } from '../../context/PriceContext';

export const CalculatorView = () => (
  <CalculatorContainer>
    <SelectBaseOffer />
    <SelectYear />
    <SelectOffer />

    <PriceProvider>
      <Basket />
    </PriceProvider>
  </CalculatorContainer>
);
