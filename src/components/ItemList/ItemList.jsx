export const ItemList = ({ greetings, sumar, restar, quantity }) => {
  //Return componente
  return (
    <section className="itemList">
      <div>
        <h4 className="subtitles">{greetings}</h4>
      </div>
      <div className="useStateCounter">
        <button
          disabled={quantity < 1}
          onClick={restar}
          className="useStateBtn"
        >
          -
        </button>
        <h4 className="useStateNumber">{quantity}</h4>
        <button onClick={sumar} className="useStateBtn">
          +
        </button>
      </div>
    </section>
  );
};
