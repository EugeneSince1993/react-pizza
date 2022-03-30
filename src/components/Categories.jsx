import React from 'react';

class Categories extends React.Component {
  render() {
    const {items, onClickItem} = this.props;
    // 1.24.05 l.3
    return (
      <div className="categories">
        <ul>
          <li className="active">Все</li>
          { items.map((name, index) => (
            <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>{name}</li>
          )) }
        </ul>
      </div>
    );
  }
}

// function Categories({ items, onClickItem }) {

//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         { items.map((name, index) => (
//           <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>{name}</li>
//         )) }
//       </ul>
//     </div>
//   );
// }

export default Categories;
