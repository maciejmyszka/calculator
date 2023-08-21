import { Button, Flex, Text } from '@chakra-ui/react';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { BaseOfferElement } from '../BaseOfferElement';
import { PackageOffer } from '../PackageOffer';
import { ElementsContainer } from '../../containers/ElementsContainer';
import { SelectionContainer } from '../../containers/SelectionContainer';

export const SelectOffer = () => {
  const {
    selectedYear,
    basket,
    setSelectedItem,
    setSelectedBase,
    selectedBase,
    setSelectedYear,
    selectedItem,
    setBasket,
  } = useCalculatorContext();

  const item = selectedBase?.prices.find(({ year }) => year === selectedYear);

  const addToBasket = () => {
    if (selectedItem) {
      setBasket([...basket, selectedItem]);
      setSelectedYear(null);
      setSelectedItem(null);
      setSelectedBase(null);
    }
  };

  if (!item) return null;
  if (!selectedYear) return null;
  if (!selectedBase) return null;
  return (
    <SelectionContainer>
      <Text textAlign='center'>Wybierz ofertę:</Text>

      <ElementsContainer>
        <BaseOfferElement />

        {selectedBase.packages?.map((set) => (
          <PackageOffer key={set.id} set={set} />
        ))}
      </ElementsContainer>

      <Flex justifyContent='center'>
        <Button
          onClick={addToBasket}
          padding='1rem 2rem'
          isDisabled={!selectedItem}
        >
          Dodaj do koszyka
        </Button>
      </Flex>
    </SelectionContainer>
  );
};
