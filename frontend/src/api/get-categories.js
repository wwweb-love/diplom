export const getCategories = () => (
    fetch("http://localhost:3033/categories").then(loaded => loaded.json())
)