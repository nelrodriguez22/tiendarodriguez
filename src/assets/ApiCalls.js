
export const getItems = () => {
  return fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => data);
}


export const getItem = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => data);
};

export const getTshirtsTypes1 = () => {
  return fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then((res) => res.json())
    .then((data) => data);
};

export const getTshirtsTypes2 = () => {
  return fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then((res) => res.json())
    .then((data) => data);
};

 
