import axios from 'axios';

export const getProducts = async () => {
  try {
    const result = await axios.get('http://localhost:1337/api/products');
    if (result.status == 200) {
      return result.data;
    }
  } catch (err) {
    return {};
  }
};
