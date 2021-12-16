import { ItemDetail } from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { getItem } from "../assets/ApiCalls";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});


  const { id } = useParams();



  useEffect(() => {
    getItem(id).then((product) => {
      setTimeout(() => {
        setItem(product);
      }, 2000);
    });
  }, [id]);

  return (
    <>
      <div className="mt-5 container mb-3">
          <ItemDetail item={item} />
      </div>
    </>
  );
};