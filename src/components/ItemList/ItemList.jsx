import { Link } from "react-router-dom";

export const ItemList = ({ items }) => {
  //Return componente
  return (
    <section className="itemList">
      <div className="filterProds">
        <Link to="/products" className="filterBtn noStyleAnchor">
          All
        </Link>
        <Link to="/products/frontend" className="filterBtn noStyleAnchor">
          Frontend
        </Link>
        <Link to="/products/backend" className="filterBtn noStyleAnchor">
          Backend
        </Link>
      </div>
      <div className="productCardContainer">
        {items.map((elemento) => {
          return (
            <div className="productCard" key={elemento.id}>
              <div className="productImageContainer">
                <img src={elemento.img} className="productImage" alt="" />
              </div>
              <div className="productInfoContainer">
                <div>
                  <h3 className="productSubtitle">{elemento.title}</h3>
                  <h4 className="productId">
                    Category:{" "}
                    {elemento.category.charAt(0).toUpperCase() +
                      elemento.category.slice(1)}
                  </h4>
                  <h4 className="productId">
                    {elemento.stock > 1 ? "Stock" : "No Stock"}
                  </h4>
                </div>
                <div className="productContains">
                  <h4 className="contains">Contains</h4>
                  <ul className="containsUl">
                    {elemento.contains.map((c) => {
                      return <li key={c}>{c}</li>;
                    })}
                  </ul>
                </div>
                <div className="productBtnContainer">
                  <Link
                    to={`/products/item-detail/${elemento.id}`}
                    className="noStyleAnchor"
                  >
                    <button className="btn">More Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
