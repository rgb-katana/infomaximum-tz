import React, { FunctionComponent } from 'react';
import Sort from '../../assets/sort.svg?react';
import styled from 'styled-components';
import { FilterValue, carsStore } from './carsStore';

interface FilterProps {
  value: string;
  options: { value: string; title: string }[];
}

const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const StyledSelect = styled.select`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  width: 204px;

  border: none;
  outline: none;
  appearance: none;
`;

const Filter: FunctionComponent<FilterProps> = ({
  options,
  value,
}: FilterProps) => {
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    carsStore.setFilter(e.target.value as FilterValue);
  };

  return (
    <FilterContainer>
      <Sort style={{ width: '15px', height: '16px' }} />
      <StyledSelect value={value} onChange={onSelect} name="carsFilter">
        {options.map(item => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </StyledSelect>
    </FilterContainer>
  );
};

export default Filter;
