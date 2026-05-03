export const getProducts = () => (
    fetch(`http://localhost:3000/products`).then(loaded => loaded.json())
)

