export const getBasket = (userId) => (
    fetch(`http://localhost:3000/basket/${userId}`).then(loaded => loaded.json())
)