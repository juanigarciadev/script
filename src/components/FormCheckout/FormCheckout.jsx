import { Link } from "react-router-dom";
import ReturnButtonContainer from "../ReturnButton/ReturnButtonContainer";
import { TextField } from "@mui/material";
import { RiFileCopyLine } from "react-icons/ri";

const FormCheckout = ({
  cart,
  getTotalPrice,
  handleSubmit,
  handleChange,
  errors,
  orderId,
  copy,
}) => {
  return (
    <>
      <div className="returnButtonCart">
        <ReturnButtonContainer />
      </div>
      {orderId ? (
        <div className="orderIdContainer">
          <h1 className="titles highlightText">Payment made successfully.</h1>
          <h3 className="smallSubtitles">
            Your purchase ID is: {orderId}{" "}
            <RiFileCopyLine
              className="copyIcon"
              title="Copy to clipboard"
              onClick={() => {
                copy(orderId);
              }}
            >
              COPY
            </RiFileCopyLine>
          </h3>
        </div>
      ) : (
        <section className="checkoutContainer">
          <div className="fromWrapper">
            <form
              action=""
              onSubmit={handleSubmit}
              method="get"
              className="checkoutFieldsContainer"
            >
              <div className="nameEmailForm">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  placeholder="First name"
                  onChange={handleChange}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName}
                  sx={{ width: "302.5px" }}
                  color="secondary"
                  InputLabelProps={{
                    style: {
                      color: "white",
                      "& label.MuiFocused": {
                        color: "white",
                      },
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  placeholder="Last name"
                  onChange={handleChange}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName}
                  sx={{ width: "302.5px" }}
                  color="secondary"
                  InputLabelProps={{
                    style: {
                      color: "white",
                    },
                  }}
                />
              </div>
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
                sx={{ width: "615px" }}
                color="secondary"
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
              <div className="nameEmailForm">
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
                  error={errors.country ? true : false}
                  helperText={errors.country}
                  sx={{ width: "302.5px" }}
                  color="secondary"
                  InputLabelProps={{
                    style: {
                      color: "white",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Postal Code"
                  variant="outlined"
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={handleChange}
                  error={errors.postalCode ? true : false}
                  helperText={errors.postalCode}
                  sx={{ width: "302.5px" }}
                  color="secondary"
                  InputLabelProps={{
                    style: {
                      color: "white",
                    },
                  }}
                />
              </div>
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                error={errors.phone ? true : false}
                helperText={errors.phone}
                sx={{ width: "615px" }}
                color="secondary"
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
              <button
                type="submit"
                value={
                  cart.length > 0 ? "Checkout" : "You can't buy nothing itself"
                }
                disabled={cart.length === 0}
                className="checkoutBtn btn secondary"
              >
                Checkout
              </button>
            </form>
          </div>
          <div>
            <section className="yourOrderContainer">
              <h3 className="subtitles">YOUR ORDER</h3>
              {cart.length > 0 ? (
                cart.map((product) => {
                  return (
                    <div key={product.id}>
                      <div className="yourOrder">
                        <h3 className="smallSubtitles">
                          {" "}
                          {product.title} x{product.quantity}
                        </h3>
                        <h3 className="smallSubtitles">
                          ${product.quantity * product.price}
                        </h3>
                      </div>
                      <div className="totalPriceOrder">
                        <h3 className="subtitles">Total:</h3>
                        <h3 className="subtitles productPrice">
                          ${getTotalPrice()}
                        </h3>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>
                  <h3 className="paddingBottom smallSubtitles">
                    You're not supossed to be here! Please add some products.
                  </h3>
                  <Link to="/products" className="btn secondary marginBottom">
                    Go to products
                  </Link>
                </div>
              )}
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default FormCheckout;
