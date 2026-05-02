export const getProduct = (id) => (
    fetch(`http://localhost:3000/product/${id}`).then(loaded => loaded.json())
)