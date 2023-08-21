import { Th, Thead, Tr } from '@chakra-ui/react';

export const TableHead = () => (
  <Thead>
    <Tr>
      <Th width='10%'>L.p.</Th>
      <Th width='40%'>Nazwa</Th>
      <Th width='40%'>Rok</Th>
      <Th width='10%'></Th>
    </Tr>
  </Thead>
);
