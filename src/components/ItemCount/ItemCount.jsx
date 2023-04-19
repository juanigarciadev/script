const ItemCount = ({ stock, sumar, restar, quantity }) => {
  return (
    <div className="useStateCounter">
      <button disabled={quantity < 1} onClick={restar} className="useStateBtn">
        -
      </button>
      <h4 className="useStateNumber">{quantity}</h4>
      <button
        disabled={stock < 1 || quantity >= stock}
        onClick={sumar}
        className="useStateBtn"
      >
        +
      </button>
    </div>
  );
};
export default ItemCount;
