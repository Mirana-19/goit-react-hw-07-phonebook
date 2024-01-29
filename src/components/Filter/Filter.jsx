import React from 'react';
import { useDispatch } from 'react-redux';
import { Label } from './Filter.styled';
import { setFilter } from '../../redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <input
        onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
        type="text"
        name="filter"
      />
    </Label>
  );
};
