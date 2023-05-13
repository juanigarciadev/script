import { useContext, useEffect, useState } from "react";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { database } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useCopyToClipboard } from "usehooks-ts";

const FormCheckoutContainer = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  // eslint-disable-next-line
  const [value, copy] = useCopyToClipboard();

  useEffect(() => {
    document.title = "Checkout | BEYOND IMAGINATION";
  }, []);

  const checkout = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(database, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(database, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      country: "",
      postalCode: null,
      phone: null,
    },
    onSubmit: checkout,
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(3, "Minimum 3 characters")
        .max(16, "Maximum 16 characters")
        .matches("[a - zA - Z]", "This field must be letters")
        .required("This field is required"),
      lastName: Yup.string()
        .min(3, "Minimum 3 characters")
        .max(16, "Maximum 16 characters")
        .matches("[a - zA - Z]", "This field must be letters")
        .required("This field is required"),
      email: Yup.string()
        .email("This field must be an valid email")
        .required("This field is required"),
      confirmEmail: Yup.string()
        .required("This field is required")
        .oneOf([Yup.ref("email")], "The e-mails do not match"),
      country: Yup.string()
        .required("This field is required")
        .min(3, "Minimum 3 characters")
        .max(20, "Maximum 20 characters"),
      postalCode: Yup.number("This field must be an number")
        .typeError("This field must be a number")
        .required("This field is required"),
      phone: Yup.number("This field must be a number")
        .typeError("This field must be a number")
        .required("This field is required"),
    }),
    validateOnChange: false,
  });

  return (
    <FormCheckout
      getTotalPrice={getTotalPrice}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
      orderId={orderId}
      cart={cart}
      copy={copy}
    />
  );
};

export default FormCheckoutContainer;
