export const getProduct = (category, id) => (
    fetch(`http://localhost:3000/api/product/${category}/${id}`).then(loaded => loaded.json())
)