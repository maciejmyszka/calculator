import { Button, FormControl, Input } from '@chakra-ui/react';
import { usePriceContext } from '../../context/PriceContext';
import discounts from '../../data/discounts.json';
import { getDiscountedByCode } from '../../utils/getDiscountedByCode';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { useToast } from '../../hooks/useToast';
import { useEffect } from 'react';

export const DiscountForm = () => {
  const { basket } = useCalculatorContext();

  const {
    codeValue,
    setCodeValue,
    finalRegularPrice,
    addedDiscountCode,
    setFinalPrice,
    setAddedDiscountCode,
    setFinalRegularPrice,
  } = usePriceContext();

  const { errorToast, successToast, infoToast } = useToast();

  useEffect(() => {
    const final = basket.reduce((acc, val) => acc + Number(val.price), 0);
    const regular = basket.reduce(
      (acc, val) => acc + Number(val?.regularPrice ?? val.price),
      0,
    );
    setFinalRegularPrice(regular);

    if (addedDiscountCode) {
      const discounted = getDiscountedByCode(
        regular,
        addedDiscountCode.amount,
        addedDiscountCode.unit,
      );

      if (discounted && final > discounted) {
        setFinalPrice(discounted);
        return;
      }
    }
    setFinalPrice(final);
  }, [basket]);

  const submitCode = () => {
    const validCode = discounts.discounts.find(
      ({ code }) => code === codeValue,
    );

    if (!validCode) {
      setCodeValue('');
      errorToast('Podany kupon jest nieprawidłowy.');
    }

    if (validCode) {
      const discountedPrice = getDiscountedByCode(
        finalRegularPrice,
        validCode.amount,
        validCode.unit,
      );

      const final = basket.reduce((acc, val) => acc + Number(val.price), 0);

      if (validCode === addedDiscountCode) {
        infoToast('Podany kod rabatowy został już zastosowany.');
        setCodeValue('');
        return;
      }

      if (final > discountedPrice) {
        setFinalPrice(discountedPrice);
        setAddedDiscountCode(validCode);
        setCodeValue('');
        successToast('Zastosowano podany kod rabatowy.');
        return;
      }

      if (final < discountedPrice) {
        infoToast('Dodano kod, jednak nie został uwzględniony.');
        setCodeValue('');
        return;
      }
    }
  };

  return (
    <FormControl display='flex' justifyContent='flex-end' gap='1rem'>
      <Input
        type='text'
        placeholder='Wpisz kod rabatowy*'
        width='250px'
        value={codeValue}
        onChange={(e) => setCodeValue(e.target.value)}
      />
      <Button type='submit' onClick={submitCode} isDisabled={!codeValue}>
        Dodaj
      </Button>
    </FormControl>
  );
};
