import db from "../firebase/firebaseConfig";
import { collection, getDocs, getDoc, doc, addDoc, updateDoc } from "firebase/firestore"

const productos = collection(db, "productos")


export const getItems = async () => {
	const data = await getDocs(productos)
	const arr = []
	data.forEach((doc) => {
		arr.push(doc.data())
	})
	return arr
}

export const getItem = async (id) => {
	const producto = doc(db, "productos", id)

	const productoRef = await getDoc(producto)

	return productoRef.data()
}

export const men = async () => {
	const data = await getDocs(productos)
	const arr = []
	data.forEach((doc) => {
		arr.push(doc.data())
	})
	return arr.filter((item) => item.category === "masculina")
}

export const women = async () => {
	const data = await getDocs(productos)
	const arr = []
	data.forEach((doc) => {
		arr.push(doc.data())
	})
	return arr.filter((item) => item.category === "femenina")
}

export const unisex = async () => {
	const data = await getDocs(productos)
	const arr = []
	data.forEach((doc) => {
		arr.push(doc.data())
	})
	return arr.filter((item) => item.category === "unisex")
}


export const addBuy = async (buyOrder) => {
	const orders = collection(db, "orders")
	const buyOrderRef = await addDoc(orders, buyOrder)
	return buyOrderRef.id
}
