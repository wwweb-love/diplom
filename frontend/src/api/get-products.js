export const getProducts = () => (
    fetch("http://localhost:3033/products").then(loaded => loaded.json())
)