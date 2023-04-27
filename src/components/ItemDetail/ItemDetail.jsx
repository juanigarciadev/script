import { Outlet } from "react-router-dom";
import ItemCountContainer from "../ItemCount/ItemCountContainer";
import ReturnButtonContainer from "../ReturnButton/ReturnButtonContainer";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const ItemDetail = ({ product, onAdd }) => {
  return (
    <>
      <div className="productWrapper">
        <div className="productContainer">
          <div className="productDetailImageContainer">
            <img src={product.img} className="productImage" alt="" />
          </div>
          <div className="productInformation">
            <div className="goBack">
              <ReturnButtonContainer />
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
              {product.stock < 1 ? (
                <h3 className="productId">
                  {<AiFillCloseCircle fill="red" />} No Stock
                </h3>
              ) : (
                <h3 className="productId">
                  {<AiFillCheckCircle fill="yellowgreen" />} Stock
                </h3>
              )}
            </div>
            <div className="buyCountBtn">
              <ItemCountContainer stock={product.stock} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ItemDetail;
