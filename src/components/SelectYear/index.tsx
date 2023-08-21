import { Text } from '@chakra-ui/react';
import { useCalculatorContext } from '../../context/CalculatorContext';
import { ElementsContainer } from '../../containers/ElementsContainer';
import { SingleElementContainer } from '../../containers/SingleElementContainer';
import { SelectionContainer } from '../../containers/SelectionContainer';

export const SelectYear = () => {
  const { selectedBase, selectedYear, setSelectedYear, setSelectedItem } =
    useCalculatorContext();

  const changeYear = (year: string) => {
    setSelectedYear(year);
    setSelectedItem(null);
  };

  if (!selectedBase) return null;
  return (
    <SelectionContainer>
      <Text textAlign='center'>Wybierz rok:</Text>

      <ElementsContainer>
        {selectedBase.prices.map(({ year, id }) => (
          <SingleElementContainer
            key={id}
            onClick={() => changeYear(year)}
            backgroundColor={year === selectedYear ? '#EFF3F3' : '#fff'}
          >
            <Text textAlign='center'>{year}</Text>
          </SingleElementContainer>
        ))}
      </ElementsContainer>
    </SelectionContainer>
  );
};
