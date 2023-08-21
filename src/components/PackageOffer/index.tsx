import { Flex, Text } from '@chakra-ui/react';
import { getDiscount } from '../../utils/getDiscount';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { Package } from '../../types/Package';
import { v4 as uuid } from 'uuid';
import { SingleElementContainer } from '../../containers/SingleElementContainer';

interface Props {
  set: Package;
}

export const PackageOffer = ({ set }: Props) => {
  const { selectedItem, setSelectedItem, selectedYear, basket } =
    useCalculatorContext();

  const rightPrice = set.prices.find(({ year }) => year === selectedYear);
  const isInBasket = basket.find(
    ({ originalId, year }) =>
      set.id === originalId && rightPrice?.year === year,
  );

  if (!rightPrice) return null;
  return (
    <SingleElementContainer
      onClick={() =>
        setSelectedItem({
          id: uuid(),
          originalId: set.id,
          name: set.name,
          price: rightPrice.price,
          regularPrice: rightPrice.regularPrice,
          year: rightPrice.year,
        })
      }
      backgroundColor={
        set.id === selectedItem?.originalId || isInBasket ? '#EFF3F3' : '#fff'
      }
      pointerEvents={isInBasket ? 'none' : 'auto'}
    >
      <Text textAlign='center'>{set.name}</Text>

      {rightPrice.regularPrice && (
        <Flex gap='0.5rem' justifyContent='center'>
          <Text textAlign='center'>
            <s>{rightPrice.regularPrice} zł</s>
          </Text>

          <Text>{getDiscount(rightPrice.regularPrice, rightPrice.price)}</Text>
        </Flex>
      )}

      <Text textAlign='center'>{rightPrice.price} zł</Text>
    </SingleElementContainer>
  );
};
