import React,{useState, useEffect} from 'react'
import { getItem } from '../assets/getItem'
import { ItemDetail } from './ItemDetail'



export const ItemDetailContainer = () => {
const [item, setItem] = useState({});
useEffect(() => {
    getItem()
	 .then(res => {
      setTimeout(() => {
        setItem(res);
      }, 2000);
    });
  }, []);

	return (
		<>
				<ItemDetail item={item} />
		</>
	)
}
