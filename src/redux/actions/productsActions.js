import { getProducts } from "../../apis/productsApi";

const getProductsAction = (payload) => {
  return {
    type: 'GET_PRODUCTS',
    payload,
  };
};

export const GetProducts = () => async (dispatch) => {
  try {
    const data = await getProducts();
    dispatch(getProductsAction(data.data));
  } catch (error) {
    console.log(error);
  }
};
