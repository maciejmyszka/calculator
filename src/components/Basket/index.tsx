import {
  Flex,
  List,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { DeleteIcon } from '@chakra-ui/icons';
import { PriceDescription } from '../PriceDescription';
import { TableHead } from '../TableHead';
import { TableFoot } from '../TableFoot';
import { useMediaQuery } from '@chakra-ui/react';
import { DiscountForm } from '../DiscountForm';
import { PriceDisplay } from '../PriceDisplay';

export const Basket = () => {
  const { basket, setBasket } = useCalculatorContext();
  const [isSmallerThan800] = useMediaQuery('(max-width: 900px)');

  const deleteItem = (itemId: string) => {
    const newBasket = basket.filter(({ id }) => id !== itemId);
    setBasket(newBasket);
  };

  if (basket.length === 0) return null;
  return (
    <>
      <Text>Podsumowanie:</Text>

      {isSmallerThan800 ? (
        <Flex flexDirection='column'>
          <List
            width='100%'
            display='flex'
            gap='1rem'
            flexDirection='column'
            borderBottom='1px solid #000'
            pb='1rem'
          >
            {basket.map(({ id, name, year }) => (
              <ListItem
                key={id}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
              >
                <Text>
                  {name} - {year}r.
                </Text>

                <DeleteIcon cursor='pointer' onClick={() => deleteItem(id)} />
              </ListItem>
            ))}
          </List>

          <Flex gap='1rem' flexDirection='column' my='1rem'>
            <Text textAlign='end'>Masz kupon rabatowy?</Text>
            <DiscountForm />
            <Flex width='100%' justifyContent='flex-end'>
              <PriceDisplay />
            </Flex>
            <PriceDescription />
          </Flex>
        </Flex>
      ) : (
        <TableContainer>
          <Table variant='simple'>
            <TableHead />

            <Tbody>
              {basket.map(({ id, name, year }, index) => (
                <Tr key={id}>
                  <Td>{index + 1}</Td>
                  <Td>{name}</Td>
                  <Td>{year}</Td>
                  <Td
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <DeleteIcon
                      cursor='pointer'
                      onClick={() => deleteItem(id)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>

            <TableFoot />
          </Table>
          <PriceDescription />
        </TableContainer>
      )}
    </>
  );
};
