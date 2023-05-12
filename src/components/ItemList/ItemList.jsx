import { Link } from "react-router-dom";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

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
        {items.map((element) => {
          return (
            <div className="productCard" key={element.id}>
              <Link
                to={`/products/item-detail/${element.id}`}
                className="productImageContainer"
                title="More Details"
              >
                <img
                  src={element.img}
                  className="productImage itemListImageMobile"
                  alt=""
                />
              </Link>
              <div className="productInfoContainer">
                <div>
                  <h3 className="productSubtitle">{element.title}</h3>
                  <h3 className="productId">
                    Category:{" "}
                    {element.category.charAt(0).toUpperCase() +
                      element.category.slice(1)}
                  </h3>
                  <h3 className="productId">
                    {element.stock < 1 ? (
                      <p className="productId">
                        {<AiFillCloseCircle fill="red" />} No Stock
                      </p>
                    ) : (
                      <p className="productId">
                        {<AiFillCheckCircle fill="yellowgreen" />} Stock:{" "}
                        {element.stock}
                      </p>
                    )}
                  </h3>
                </div>
                <div className="productContains">
                  <h3 className="contains">Contains</h3>
                  <ul className="containsUl">
                    {element.contains.map((c) => {
                      return <li key={c}>{c}</li>;
                    })}
                  </ul>
                </div>
                <div className="productBtnContainer">
                  <Link
                    to={`/products/item-detail/${element.id}`}
                    className="noStyleAnchor"
                  >
                    <button className="btn">More Details</button>
                  </Link>
                </div>
              </div>
              {element.new && (
                <div className="newProduct">
                  <h3 className="smallSubtitles">New</h3>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
