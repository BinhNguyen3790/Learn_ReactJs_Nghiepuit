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