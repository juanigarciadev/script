import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greetings, sumar, restar, quantity }) => {
  return (
    <ItemList
      greetings={greetings}
      sumar={sumar}
      restar={restar}
      quantity={quantity}
    />
  );
};
