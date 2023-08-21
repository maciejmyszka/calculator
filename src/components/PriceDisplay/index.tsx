import { Flex, Text } from '@chakra-ui/react';
import { getDiscount } from '../../utils/getDiscount';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { usePriceContext } from '../../context/PriceContext';

export const PriceDisplay = () => {
  const { basket } = useCalculatorContext();
  const { finalRegularPrice, finalPrice } = usePriceContext();

  const isPromotion =
    basket.some(({ regularPrice }) => regularPrice) ||
    finalRegularPrice !== finalPrice;

  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      {isPromotion && (
        <Flex gap='0.5rem'>
          <Text>
            <s>{finalRegularPrice} zł</s>
          </Text>
          <Text color='red'>{getDiscount(finalRegularPrice, finalPrice)}</Text>
        </Flex>
      )}
      <Text>{finalPrice.toFixed(2)} zł</Text>
    </Flex>
  );
};
