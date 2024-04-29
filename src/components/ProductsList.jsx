import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotal,
  decreaseAmount,
  increaseAmount,
  removeItem,
} from "../features/products/productsSlice";

const ProductsList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <ul className="text-white">
      {products.map((product) => (
        <div
          key={product.id}
          className="card flex-row flex w-full bg-base-100 shadow-xl mb-5"
        >
          <figure>
            <img
              src={product.images[0]}
              className="w-60 h-60"
              alt={product.title}
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="flex text-center mb-4">
              <button
                onClick={() => {
                  if (product.amount > 1 ) {
                    dispatch(decreaseAmount(product.id))
                  }else {
                    dispatch(removeItem(product.id))
                  }
                }}
                className="btn btn-primary mr-4"
              >
                -
              </button>
              <p className="text-4xl">{product.amount}</p>
              <button onClick={() => {
                dispatch(increaseAmount(product.id))
              }}
                
                className="btn btn-primary"
              >
                +
              </button>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => dispatch(removeItem(product.id))}
                className="btn btn-primary"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ProductsList;
