

export const deleteProductOnBasket = (userId, productId) => (
    fetch(`http://localhost:3000/basket/${userId}/${productId}`, {
        method: "DELETE"
    }).then(loaded => loaded.json())
)