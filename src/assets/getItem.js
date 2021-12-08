
export const getItem = () => {
  return fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(data => data);
}




 
