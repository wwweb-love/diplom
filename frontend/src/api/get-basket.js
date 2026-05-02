export const getBasket = (userId) => (
    fetch(`http://localhost:3000/api/basket/${userId}`).then(loaded => loaded.json())
)