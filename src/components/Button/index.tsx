import { useContext } from "react";
import products from "../../ProductsList";
import { CartContext } from "../../Providers/Cart/index";

interface TypeOperationProduct {
  type: string;
  id: number;
}

const Button = ({ type, id }: TypeOperationProduct) => {
  const { cart, addProduct, deleteProduct } = useContext(CartContext);

  const text = type === "addCart" ? "Add to cart" : "Remove from cart";

  const handleClick = () => {
    products.map((item) => {
      if (type === "addCart" && id === item.id) {
        addProduct(item);
      }
      if (type === "removeCart" && id === item.id) {
        deleteProduct(item);
      }
    });
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
