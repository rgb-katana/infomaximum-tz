import React from 'react';
import Sort from '../../assets/sort.svg?react';
import styled from 'styled-components';
import { FilterValue, setNewFilter } from './carsSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';

interface FilterProps {
  value: string;
  options: { value: string; title: string }[];
  onChange: React.Dispatch<React.SetStateAction<FilterValue>>;
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

const Filter: React.FunctionComponent<FilterProps> = (props: FilterProps) => {
  const dispatch = useAppDispatch();

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e.target.value as FilterValue);
    dispatch(setNewFilter(e.target.value as FilterValue));
  };

  return (
    <FilterContainer>
      <Sort style={{ width: '15px', height: '16px' }} />
      <StyledSelect value={props.value} onChange={onSelect}>
        {props.options.map(item => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </StyledSelect>
    </FilterContainer>
  );
};

export default Filter;
