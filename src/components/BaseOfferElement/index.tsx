import { Flex, Text } from '@chakra-ui/react';
import { getDiscount } from '../../utils/getDiscount';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { v4 as uuid } from 'uuid';
import { SingleElementContainer } from '../../containers/SingleElementContainer';

export const BaseOfferElement = () => {
  const { setSelectedItem, selectedBase, selectedItem, selectedYear, basket } =
    useCalculatorContext();

  const item = selectedBase?.prices.find(({ year }) => year === selectedYear);

  const isInBasket = basket.find(
    ({ originalId, year }) =>
      originalId === selectedBase?.id && item?.year === year,
  );

  if (!item || !selectedBase) return null;
  return (
    <SingleElementContainer
      onClick={() =>
        setSelectedItem({
          id: uuid(),
          originalId: selectedBase.id,
          name: selectedBase.name,
          price: item.price,
          regularPrice: item.regularPrice,
          year: item.year,
        })
      }
      backgroundColor={
        selectedBase.id === selectedItem?.originalId || isInBasket
          ? '#EFF3F3'
          : '#fff'
      }
    >
      <Text textAlign='center'>{selectedBase.name}</Text>

      {item.regularPrice && (
        <Flex gap='0.5rem'>
          <Text textAlign='center'>
            <s>{item.regularPrice} zł</s>
          </Text>

          <Text>{getDiscount(item.regularPrice, item.price)}</Text>
        </Flex>
      )}

      <Text textAlign='center'>{item.price} zł</Text>
    </SingleElementContainer>
  );
};
