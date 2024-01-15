import styled from 'styled-components';
import Glass from '../../assets/glass.svg?react';
import { useState } from 'react';

const StyledSearchBar = styled.form`
  width: 445px;
  height: 36px;
  border-radius: 5px;
  border: 1px solid var(--color-gray-2);
  padding: 4px 4px 4px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const StyledInput = styled.input`
  width: 90%;
  border: none;
  font-family: inherit;
  font-weight: 400;

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: var(--color-gray-2);
  }
`;

const StyledSearchButton = styled.button`
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  background-color: var(--color-purple-default);
  color: var(--color-gray-0);

  &:hover {
    background-color: var(--color-purple-hover);
  }

  &:active {
    background-color: var(--color-purple-pressed);
  }
`;

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FunctionComponent<SearchProps> = ({ setSearch }) => {
  const [draftSearch, setDraftSearch] = useState('');

  const handleDraftChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDraftSearch(event.target.value);
  };

  return (
    <StyledSearchBar
      onSubmit={e => {
        e.preventDefault();
        setSearch(draftSearch);
      }}
    >
      <StyledInput placeholder="Найти авто" onChange={handleDraftChange} />
      <StyledSearchButton>
        <Glass width={20} height={20} />
      </StyledSearchButton>
    </StyledSearchBar>
  );
};

export default Search;
