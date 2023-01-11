import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filtersSlice';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <FilterLabel>
      Find contacts by name:
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
