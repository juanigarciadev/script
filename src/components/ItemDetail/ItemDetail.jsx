import { Outlet } from "react-router-dom";
import ItemCountContainer from "../ItemCount/ItemCountContainer";
import ReturnButtonContainer from "../ReturnButton/ReturnButtonContainer";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const ItemDetail = ({ product, onAdd, totalQuantity, productNotFound }) => {
  // if (!product.img) {
  //   return (
  //     <div className="productWrapper">
  //       <div className="productContainer">
  //         <div className="productDetailImageContainer">
  //           <img
  //             src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination_zfxqv7.png"
  //             className="contentLoader"
  //             alt="content loader"
  //           />
  //         </div>
  //         <div className="productInformation infoLoaderContainer">
  //           <img
  //             src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination_zfxqv7.png"
  //             className="contentLoader"
  //             alt="content loader"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  if (product.title) {
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
                <h3 className="productId">COD {product.id}</h3>
              </div>
              <div>
                <h3 className="smallSubtitles">{product.description}</h3>
              </div>
              <div className="productStockPrice">
                <h3 className="productPrice">${product.price}</h3>
                {product.stock < 1 ? (
                  <h3 className="productId">
                    {<AiFillCloseCircle fill="red" />} No Stock
                  </h3>
                ) : (
                  <h3 className="productId">
                    {<AiFillCheckCircle fill="yellowgreen" />} Stock:{" "}
                    {product.stock}
                  </h3>
                )}
              </div>
              <div className="buyCountBtn">
                <ItemCountContainer
                  stock={product.stock}
                  onAdd={onAdd}
                  initial={totalQuantity}
                />
              </div>
            </div>
          </div>
        </div>

        <Outlet />
      </>
    );
  } else {
    return (
      <div className="productWrapper">
        <div className="productContainer">
          <div className="productDetailImageContainer">
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination_zfxqv7.png"
              className="navbarLogo"
              alt="content loader"
            />
          </div>
          <div className="productInformation">
            <div className="goBack">
              <ReturnButtonContainer />
            </div>
            <div>
              <p className="subtitles">{productNotFound}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ItemDetail;
