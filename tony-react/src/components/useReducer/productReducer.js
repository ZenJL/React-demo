// create constant
export const ADD_PPRODUCT = 'PRODUCT/ADD_PPRODUCT';
export const REMOVE_PRODUCT = 'PRODUCT/REMOVE_PRODUCT';
export const SHOW_LOADING = 'PRODUCT/SHOW_LOADING';
export const HIDE_LOADING = 'PRODUCT/HIDE_LOADING';

// actions types
export function showLoading() {
  return { type: SHOW_LOADING}
}

export function hideLoading() {
  return { type: HIDE_LOADING}
}

export function addProduct(product) {
  return { 
    type: ADD_PPRODUCT,
    payload: product
  }
}

export function removeProduct(productId) {
  return {
    type: REMOVE_PRODUCT,
    payload: productId
  }
}

// initial state
export const initialState = {
  products: [],
  isLoading: false  
}

// reducers
export function reducers(state = initialState, action) {
  // action -> { type, payload }
  switch(action.type) {
    case ADD_PPRODUCT: {
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    }
    case SHOW_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case HIDE_LOADING: {
      return {
        ...state,
        isLoading: false
      }
    }
    case REMOVE_PRODUCT: {
      const newProducts = [...state.products];
      const indexProduct = newProducts.findIndex(product => product.id === action.payload);
      newProducts.splice(indexProduct, 1);
      return {
        ...state,
        products: newProducts
      }
    }
    default:
      return state;
  }
}