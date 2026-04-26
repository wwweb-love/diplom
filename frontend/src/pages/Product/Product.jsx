import styled from "styled-components"
import { Loader, Search, SectionPathToProduct } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { selectorProduct } from "../../selectors"
import { useEffect, useState } from "react"
import { getProduct } from "../../api"
import { useParams } from "react-router"
import { actionProduct } from "../../actions"

const ProductContainer = ({ className }) => {
    const params = useParams()
    const dispatch = useDispatch()
    const [isLoadingProduct, setIsLoadingProduct] = useState(true)
    useEffect(() => {
        setIsLoadingProduct(true)
        getProduct(params.category, params.id).then(loaded => {
            dispatch(actionProduct(loaded))
            setIsLoadingProduct(false)
        })

    }, [])

    const product = useSelector(selectorProduct)

    const { _id, title, price, image_url, count, discount, category, createdAt } = product


    return (
        <div className={className}>
            {isLoadingProduct ? <Loader /> : <>
                <Search />
                <SectionPathToProduct />
                <div className="product">
                    <div className="block-image-info">
                        <img className="image" src={image_url} alt="" />
                        <div className="block-info-title">
                            <h2>{title}</h2>
                            <div className="info">
                                <p>Количество: {count}</p>
                                <p>Стоимость: {price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="block-btn-id">
                        <button className="btn-buy-product">Купить</button>
                        <p className="id-product">{_id}</p>
                    </div>
                </div>

            </>}
        </div>
    )
}

export const Product = styled(ProductContainer)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .product {
        display: flex;
        justify-content: space-between;
    }

    .block-image-info {
        display: flex;
        gap: 20px;
    }

    .image {
        width: 500px;
        height: 500px;
        object-fit: cover;  /* ключевое свойство */
    }

    .block-info-title {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .block-btn-id {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
    }

    .btn-buy-product {
        padding: 10px 15px;
        font-size: 16px;
        background-color: #005bff;
        color: #fff;
        border: 0;
        border-radius: 15px;
        cursor: pointer;
    }

    .btn-buy-product:hover {
        opacity: 0.5;
    }

    .id-product {
    }
`