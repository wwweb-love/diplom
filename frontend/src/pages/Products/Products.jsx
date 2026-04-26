import styled from "styled-components"
import { Search, SectionSorted, SectionCategory, ProductCard } from "../../components"
import { getProducts } from "../../api"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionProducts } from "../../actions"
import { selectorProducts } from "../../selectors"
import { Loader } from "../../components"

const ProductsContainer = ({ className }) => {
    const dispatch = useDispatch()
    const [isLoadingProducts, setIsLoadingProducts] = useState(true)

    useEffect(() => {
        setIsLoadingProducts(true)

        getProducts().then((loaded) => {
            dispatch(actionProducts(loaded))
            setIsLoadingProducts(false)
        })
    }, [])

    const products = useSelector(selectorProducts)

    return (
        <div className={className}>
            <Search />
            <div className="block-category-products">
                <SectionCategory />
                <div className="block-sorted-products">
                    <SectionSorted />
                    {isLoadingProducts ? <Loader /> : <div className="block-products">
                        {products.map(product => <ProductCard key={product._id} product={product} />)}
                    </div>}
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
    position: relative;

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