import styled from "styled-components"
import { Search, SectionSorted, SectionCategory, ProductCard } from "../../components"
import { getProducts } from "../../api"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionProducts } from "../../actions"
import { selectorProducts } from "../../selectors"

const ProductsContainer = ({ className }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        getProducts().then((loaded) => dispatch(actionProducts(loaded)))
    }, [])

    const products = useSelector(selectorProducts)

    return (
        <div className={className}>
            <Search />
            <div className="block-category-products">
                <SectionCategory />
                <div className="block-sorted-products">
                    <SectionSorted />
                    <div className="block-products">
                        {products.map(product => <ProductCard key={product.id} imageUrl={product.imageUrl} title={product.title} id={product.id} price={product.price} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Products = styled(ProductsContainer)`

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .block-category-products {
        display: flex;
        justify-content: space-between;
    }

    .block-sorted-products {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .block-products {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }



`