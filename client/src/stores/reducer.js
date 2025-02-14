import { SET_CART, SELECT_ALL_CART_ITEM, SELECT_CART_ITEM, UPDATE_CART, SET_USER } from './constants';

const reducer = (state, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        current_user: action.payload,
      };
    }
    case SET_CART: {
      console.log('paylaod:', action.payload);
      return {
        ...state,
        cart: action.payload,
      };
    }
    case SELECT_ALL_CART_ITEM: {
      let newCart = state.cart;
      newCart.products = newCart.products.map((item) => ({ ...item, isSelected: action.payload }));
      return {
        ...state,
        cart: newCart,
      };
    }
    case SELECT_CART_ITEM: {
      let newCart = state.cart;
      let i = newCart.products.findIndex((item) => item.product_id === action.payload);
      console.log(i);
      if (i < 0) return state;
      newCart.products[i].isSelected = !newCart.products[i].isSelected;
      return {
        ...state,
        cart: newCart,
      };
    }

    case UPDATE_CART: {
      return {
        ...state,
      };
    }

    default:
      return new Error('Invalid action!');
  }
};

export default reducer;