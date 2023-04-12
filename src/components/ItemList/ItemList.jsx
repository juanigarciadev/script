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
                    <li className="containsList">HTML</li>
                    <li className="containsList">CSS</li>
                    <li className="containsList">Git and Github</li>
                    <li className="containsList">SASS</li>
                    <li className="containsList">Bootstrap</li>
                    <li className="containsList">Node</li>
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
                  <button className="btn secondary">Add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
