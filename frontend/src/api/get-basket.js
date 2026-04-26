export const getBasket = () => (
    fetch("http://localhost:3000/api/basket/1").then(loaded => loaded.json())
)