import { Text } from '@chakra-ui/react';
import offerData from '../../data/data.json';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { BaseOffer } from '../../types/BaseOffer';
import { ElementsContainer } from '../../containers/ElementsContainer';
import { SingleElementContainer } from '../../containers/SingleElementContainer';

export const SelectBaseOffer = () => {
  const { selectedBase, setSelectedYear, setSelectedItem, setSelectedBase } =
    useCalculatorContext();

  const changeBase = (base: BaseOffer) => {
    setSelectedYear(null);
    setSelectedItem(null);
    setSelectedBase(base);
  };

  return (
    <>
      <Text textAlign='center'>Wybierz produkt:</Text>

      <ElementsContainer>
        {offerData.offer.map((offer: BaseOffer) => (
          <SingleElementContainer
            key={offer.id}
            onClick={() => changeBase(offer)}
            backgroundColor={offer === selectedBase ? '#EFF3F3' : '#fff'}
          >
            <Text textAlign='center'>{offer.name}</Text>
          </SingleElementContainer>
        ))}
      </ElementsContainer>
    </>
  );
};
