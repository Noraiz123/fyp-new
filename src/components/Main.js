import React, { useEffect } from 'react';
import './Main.css';
import Product from './Product';
import { useStateValue } from '../StateProvider';
import { useDispatch, useSelector } from 'react-redux';
import { GetProducts } from '../redux/actions/productsActions';

function Main() {
  // const [{ products, category }] = useStateValue();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProducts())
  }, [dispatch]);
  return (
    <div className='main'>
      <div className='products'>
        {products?.map((product) => (
          // category === 'all' ? (
          //   <Product id={product.id} item={product} />
          // ) : category === product.category ? (
          //   <Product id={product.id} item={product} />
          // ) :
          <Product id={product.id} item={product.attributes} />
        ))}
      </div>
    </div>
  );
}
export default Main;
