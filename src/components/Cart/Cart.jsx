import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReturnButtonContainer from "../ReturnButton/ReturnButtonContainer";

const Cart = ({
  cart,
  clearCart,
  deleteProductById,
  cartTotalPrice,
  navigate,
}) => {
  return (
    <>
      <div className="returnButtonCart">
        <ReturnButtonContainer />
      </div>
      <div className="cartItemsContainer">
        <h1 className="subtitles">
          {cart.length < 1 ? "The cart is empty" : ""}
        </h1>
        {cart.map((product) => {
          return (
            <div key={product.id} className="itemAddedCart">
              <div
                className="itemAddedCartGrid productAddedCartImageContainer"
                style={{ backgroundImage: `url(${product.img})` }}
              ></div>
              <div className="itemAddedCartGrid prodData">
                <div>
                  <h3 className="productAddedSubtitle">{product.title}</h3>
                  <h3 className="smallSubtitles productAddedCartDescription">
                    {product.shortDescription}
                  </h3>
                </div>
                <div className="prodQuanPrice">
                  <div className="prodQuanPriceDetails">
                    <h4>Quantity:</h4>
                    <h4 className="smallSubtitles">{product.quantity}</h4>
                  </div>
                  <div className="prodQuanPriceDetails">
                    <h4>Subtotal:</h4>
                    <h4 className="smallSubtitles">
                      ${product.price * product.quantity}
                    </h4>
                  </div>
                </div>
              </div>
              <BsTrash3
                className="deleteCartItem"
                onClick={() => deleteProductById(product.id)}
              />
              <hr className="productDivider" />
            </div>
          );
        })}
        {cart.length < 1 ? (
          <Link to="/products" className="btn">
            Go to products
          </Link>
        ) : (
          <section className="cartControlContainer">
            <div>
              <h3 className="subtitles">Total: ${cartTotalPrice}</h3>
            </div>
            <div className="cartControlButtons">
              <button
                className="btn secondary cartBtn"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
              <button className="btn cartBtn" onClick={clearCart}>
                Clear cart
              </button>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Cart;
