import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import products from "./ProductsList";
import CardProduct from "./components/CardProduct";
import { CartContext } from "./Providers/Cart";

function App() {
  const { cart } = useContext(CartContext);

  console.log(cart);

  return (
    <div className="App">
      <header className="App-header">
        <div className="grade_Products">
          {products.map((item) => (
            <CardProduct
              id={item.id}
              price={item.price}
              title={item.title}
              image={item.image}
              type="addCart"
            />
          ))}
        </div>
        <section>
          <div className="div_cart">CART:</div>
          <div className="grade_Products">
            {cart.map((item) => (
              <CardProduct
                id={item.id}
                price={item.price}
                title={item.title}
                image={item.image}
                type="removeCart"
              />
            ))}
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
