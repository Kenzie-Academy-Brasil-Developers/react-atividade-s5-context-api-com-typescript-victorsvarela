import { InputHTMLAttributes } from "react";
import Button from "../Button";
import "./style.css";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  type: string;
}

const CardProduct = ({ id, title, price, image, type }: Product) => {
  return (
    <>
      <div className="card__Product">
        <div>
          <figure>
            <img src={image} alt="imageProduct" />
          </figure>
        </div>
        <div>
          <p>{title.substring(0, 36)}...</p>
        </div>
        <div>
          <h3>R$ {price}</h3>
        </div>
        <div>
          <Button type={type} id={id}></Button>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
