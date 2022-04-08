import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {

  return (
    <div className="categories">
      <ul>
        <li 
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        { 
        items &&
          items.map((name, index) => (
            <li 
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)} 
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))
        }
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaultProps = {
  activeCategory: null,
  items: []
};

export default Categories;
// l8 1.45.50
