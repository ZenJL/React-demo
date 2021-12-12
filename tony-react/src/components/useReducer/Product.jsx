import React, { useState, useReducer }  from 'react';

import { initialState, reducers, showLoading, hideLoading, addProduct, removeProduct } from './productReducer';

function Product() {
  // initial state
  const [name, setName] = useState('');
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [{ products, isLoading }, dispatch] = useReducer(reducers, initialState);

  function handleAddProduct() {
    // setIsLoading(true);
    dispatch(showLoading())
    setName('');
    const product = {
      id: Date.now(),
      name: name
    }
    setTimeout(() => {
      dispatch(hideLoading())
    }, 500)
    setTimeout(() => {
      dispatch(addProduct(product))
      // setProducts(prevState => [...prevState, product]);
    }, 600)
  }

  const handleDeleteProduct = productId => () => {
    // const newProducts = [...products];
    // const indexProduct = newProducts.findIndex(product => product.id === productId);
    // newProducts.splice(indexProduct, 1);
    // setProducts(newProducts)
    dispatch(removeProduct(productId))
  }

  return (
    <div>
      Title: <input type="text" value={name} onChange={e => setName(e.target.value)} /> {' '}
      <button type="button" onClick={handleAddProduct}>Add</button>
      
      <br /><br />
      <h3>List Products:</h3>
      {isLoading && <div>Loading ...</div>}

      <br />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            Name: {product.name}{' '}
            <button type="button" onClick={handleDeleteProduct(product.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Product
