import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter
        filters={props.filters}
        fetchFilters={props.fetchFilters}
        handleChange={props.handleFilterChange}
      />
      <FilteredFruitList
        items={props.items}
        selectedFilter={props.selectedFilter} />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
