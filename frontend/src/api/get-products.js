export const getProducts = () => (
    fetch(`http://localhost:3000/products`, {credentials: 'include'}).then(loaded => loaded.json())
)
