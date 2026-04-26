import { useEffect, useState } from "react"
import styled from "styled-components"
import { getBasket } from "../../api"
import { Loader, BasketCard, BasketInfo } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { actionBasket } from "../../actions"
import { selectorBasket } from "../../selectors"
import { product } from "../../reducers"

const BasketContainer = ({ className }) => {
    const [isLoadingBasket, setIsLoadingBasket] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoadingBasket(true)
        const basket = getBasket().then(loaded => {
            dispatch(actionBasket(loaded))
            setIsLoadingBasket(false)
        })
    }, [])

    const basket = useSelector(selectorBasket)

    return (
        <div className={className}>
            <h2>Корзина</h2>
            {isLoadingBasket ? <Loader /> : <div className="block-products-info">
                <div className="products">
                    {basket.products.map(product => <BasketCard key={product._id} product={product} />)}
                </div>

                <BasketInfo products={basket.products} />
            </div>}


        </div>
    )
}

export const Basket = styled(BasketContainer)`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    
    .block-products-info {
        display: flex;
        justify-content: space-between;
    }

    .products {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

`