import { Outlet, Link } from "react-router-dom";
import ItemCountContainer from "../ItemCount/ItemCountContainer";
import { BsChevronLeft } from "react-icons/bs";

const ItemDetail = ({ product, history }) => {
  return (
    <>
      <div className="productWrapper">
        <div className="productContainer">
          <div className="productDetailImageContainer">
            <img src={product.img} className="productImage" alt="" />
          </div>
          <div className="productInformation">
            <div className="goBack">
              <Link to="/products" className="goBackText">
                <BsChevronLeft />
                Return to products
              </Link>
            </div>
            <div>
              <h3 className="productSubtitle">{product.title}</h3>
              <h4 className="productId">COD {product.id}</h4>
            </div>
            <div>
              <h3 className="smallSubtitles">{product.description}</h3>
            </div>
            <div className="productStockPrice">
              <h4 className="productPrice">${product.price}</h4>
              {product.stock > 0 ? "Stock" : "No Stock"}
            </div>
            <div className="buyCountBtn">
              <ItemCountContainer stock={product.stock} />
              <button className="btn" disabled={product.stock < 1}>
                {product.stock > 0 ? "Buy" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ItemDetail;
