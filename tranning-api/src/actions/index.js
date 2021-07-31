import callApi from "../ultils/apiCaller";
import * as Types from "./../constants/ActionTypes";

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then(res => {
      dispatch(actFetchProducts(res.data));
    })
  }
}

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
}

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "DELETE", null).then(res => {
      dispatch(actDeleteProduct(id));
    })
  }
}

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return callApi("products", "POST", product).then(res => {
      dispatch(actAddProduct(res.data));
    })
  }
}

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product
  }
}
