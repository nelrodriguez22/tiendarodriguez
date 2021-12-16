import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getItems,
  getTshirtsTypes1,
  getTshirtsTypes2,
} from "../assets/ApiCalls";

export const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);


  useEffect(() => {
    if (!id) {
      setItems([]);
      getItems().then((data) => {
        setTimeout(() => {
          setItems(data);
        }, 2000);
      });
    } else if (id === "men-clothing") {
      setItems([]);
      getTshirtsTypes1().then((data) => {
        setTimeout(() => {
          setItems(data);
        }, 2000);
      });
    } else {
      setItems([]);
      getTshirtsTypes2().then((data) => {
        setTimeout(() => {
          setItems(data);
        }, 2000);
      });
    }
  }, [id]);

  return (
    <div className="container mt-4">
        <ItemList items={items} />
    </div>
  );
};
