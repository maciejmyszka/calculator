import { Td, Tfoot, Tr } from '@chakra-ui/react';
import { PriceDisplay } from '../PriceDisplay';
import { DiscountForm } from '../DiscountForm';

export const TableFoot = () => {
  return (
    <Tfoot>
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td>
          <DiscountForm />
        </Td>
        <Td>
          <PriceDisplay />
        </Td>
      </Tr>
    </Tfoot>
  );
};
