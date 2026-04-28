export const getCategories = () => (
    fetch("http://localhost:3000/categories").then(loaded => loaded.json())
)