export const postProductOnBasket = (userId, productId) => (
    fetch(`http://localhost:3000/basket/${userId}/${productId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            product: productId,
            selected_count: 1
        })
    }).then(loaded => loaded.json())
)