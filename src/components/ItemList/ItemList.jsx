export const ItemList = ({ items, sumar, restar, quantity }) => {
  //Return componente
  return (
    <section className="itemList">
      <div className="productCardContainer">
        {items.map((elemento) => {
          return (
            <div className="productCard" key={elemento.id}>
              <div className="productImageContainer">
                <img src={elemento.img} className="productImage" alt="" />
              </div>
              <div className="productInfoContainer">
                <div>
                  {" "}
                  <h3 className="productSubtitle">{elemento.title}</h3>
                  <h4 className="productId">COD {elemento.id}</h4>
                </div>
                <div className="stockPrice">
                  <h4 className="productPrice">${elemento.price}</h4>
                  {elemento.stock > 0 ? "Stock" : "No Stock"}
                </div>
                <div className="productContains">
                  <h4 className="contains">Contains</h4>
                  <ul className="containsUl">
                    {elemento.contains.map((c) => {
                      return <li>{c}</li>;
                    })}
                  </ul>
                </div>
                <div className="productBtnContainer">
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
                  <button className="btn" disabled={elemento.stock < 1}>
                    {elemento.stock > 0 ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
