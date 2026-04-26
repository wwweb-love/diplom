export const getProducts = () => (
    fetch("http://localhost:3000/api/products").then(loaded => loaded.json())
)