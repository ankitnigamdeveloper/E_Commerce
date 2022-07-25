

import {
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCTS_BY_CATEGORY_BEGIN,
  GET_PRODUCTS_BY_CATEGORY_SUCCESS,
  GET_PRODUCTS_BY_CATEGORY_FAIL,
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  APPLY_FILTERS_BEGIN,
  APPLY_FILTERS_SUCCESS,
  APPLY_FILTERS_FAIL
} from "../actions/productAction";

const initialState = {
  products: null,
  product: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        // products:[{_id:1, imagePath:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg", 
        // title:"product test", price: 100, department:"Men"}]
        products: action.payload
      };
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        // products:[{_id:1, imagePath:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg", 
        // title:"product test", price: 100, department:"Men"}],
        error: action.payload.error.response.data
      };
    case GET_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_PRODUCTS_BY_CATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        products:[{_id:1, imagePath:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg", 
        title:"product test", price: 100}]
        // products: action.payload.data.products
      };
    case GET_PRODUCTS_BY_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data,
        products:[{_id:1, imagePath:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg", 
        title:"product test", price: 100, department:"Men"}]
      };
    case SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        // products: action.payload.data.products
        products:[{_id:1, imagePath:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg", 
        title:"product test", price: 100, department:"Men"}]
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data,
        products:[{_id:1, imagePath:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg", 
        title:"product test", price: 100, department:"Men"}]
      };
    case APPLY_FILTERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case APPLY_FILTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        // products: action.payload.data.products
        products:[{_id:1, imagePath:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg", 
        title:"product test", price: 100, department:"Men"}]
      };
    case APPLY_FILTERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data,
        products:[{_id:1, imagePath:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg", 
        title:"product test", price: 100, department:"Men"}]
      };
    default:
      return state;
  }
};
