const transformerProduct = (product) => {
    const { _id, title, price, count, image_url, category } = product
    return { _id: _id, title: title, price: price, count: count, image_url: image_url, category: category.title }
}

module.exports = { transformerProduct }