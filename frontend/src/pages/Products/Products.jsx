import styled from "styled-components"
import { Search, SectionSorted, SectionCategory, ProductCard } from "../../components"
import { getProducts } from "../../api"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionGlobalError, actionProducts } from "../../actions"
import { selectorGlobalError, selectorProducts, selectorSelectedCategory } from "../../selectors"
import { Loader } from "../../components"
import { useNavigate } from "react-router"
import { useFetchData } from "../../hooks"

const ProductsContainer = ({ className }) => {
    const products = useSelector(selectorProducts)
    const { fetchData, isLoading } = useFetchData()

    console.log("page ProductS", {
        products,
        isLoading
    })

    useEffect(() => {
        if (!products.length) {
            fetchData(getProducts, actionGlobalError, actionProducts)
        }
        console.log("useEff")
    }, [])


    return (
        <div className={className}>
            {isLoading || !Object.keys(products).length ? <Loader /> : <>
                <Search />
                <div className="block-category-products">
                    <SectionCategory />
                    <div className="block-sorted-products">
                        <SectionSorted />
                        <div className="block-products">
                            {products.map(product => <ProductCard key={product._id} product={product} />)}
                        </div>
                    </div>
                </div>
            </>}
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