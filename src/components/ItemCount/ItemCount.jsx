import { ToastContainer } from "react-toastify";

const ItemCount = ({
  stock,
  add,
  substract,
  quantity,
  onAdd,
  addedToCartToast,
}) => {
  return (
    <>
      <div className="useStateCounter">
        <button
          disabled={quantity < 1}
          onClick={substract}
          title="Substract items"
          className="useStateBtn"
        >
          -
        </button>
        <h4 className="useStateNumber">{quantity}</h4>
        <button
          onClick={add}
          disabled={stock < 1 || quantity === stock}
          title="Add items"
          className="useStateBtn"
        >
          +
        </button>
      </div>
      <div>
        <button
          className="btn"
          disabled={stock < 1 || quantity < 1}
          onClick={() => {
            onAdd(quantity);
            addedToCartToast();
          }}
        >
          {stock < 1 ? "Out of Stock" : "Add to Cart"}
        </button>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};
export default ItemCount;
