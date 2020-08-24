import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = ({ match }) => {
  return (
    <>
      <div>Strona Produktów</div>

      {/* W ten sposób odwołujemy się do linka */}
      <Product id={match.params.id} />

      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProductPage;
