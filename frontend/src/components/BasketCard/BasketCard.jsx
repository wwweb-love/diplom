import styled from "styled-components"
import CloseSVG from "../../assets/svg/close.svg?react"
import PlusSVG from "../../assets/svg/plus.svg?react"
import MinusSVG from "../../assets/svg/minus.svg?react"
import DeleteSVG from "../../assets/svg/delete.svg?react"
import { useDispatch, useSelector } from "react-redux"
import { selectorBasket, selectorUser } from "../../selectors"
import { actionBasket, actionGlobalError } from "../../actions"
import { useFetchData } from "../../hooks"
import { postBasket, deleteProductOnBasket } from "../../api"

const BasketCardContainer = ({ className, product }) => {
    const { _id, title, price, image_url, count, discount, category, createdAt } = product.product
    const basket = useSelector(selectorBasket)
    const dispatch = useDispatch()
    const user = useSelector(selectorUser) || JSON.parse(localStorage.getItem("user"))
    const { fetchData, isLoading } = useFetchData()

    console.log("BasketCard", {
        product,
        basket,
        user,
        isLoading
    })

    const handleClickPlusCountProductOnBasket = () => {
        const newBasket = JSON.parse(JSON.stringify(basket))

        const productItem = newBasket.products.find(item => item.product._id === _id)

        if (productItem) {
            productItem.selected_count += 1
        }

        console.log("basket send", newBasket)
        dispatch(actionBasket(newBasket))
        fetchData(postBasket, actionGlobalError, actionBasket, [newBasket, user._id])
    }   

    const handleClickMinusCountProductOnBasket = () => {
        const newBasket = JSON.parse(JSON.stringify(basket))

        const productItem = newBasket.products.find(item => item.product._id === _id)

        if (productItem) {
            productItem.selected_count -= 1
        }

        dispatch(actionBasket(newBasket))
    }

    const handleClickDeleteProductOnBasket = () => {
        fetchData(deleteProductOnBasket, actionGlobalError, actionBasket, [user._id, _id])
    }

    return (
        <div className={className}>
            <img className="image" src={image_url} alt="" />

            <div className="block-info-wrapper">
                <p className="id">id товара: {_id}</p>
                <div className="block-info">
                    <p className="title">{title}</p>
                    <p className="count">На складе: {count}</p>

                    <p className="count">
                        Выбрали:
                        <PlusSVG onClick={handleClickPlusCountProductOnBasket} />
                        {product.selected_count}
                        <MinusSVG onClick={handleClickMinusCountProductOnBasket} />
                    </p>

                    <p className="price">Стоимость: {price * product.selected_count}</p>
                </div>
            </div>

            <DeleteSVG onClick={handleClickDeleteProductOnBasket} className="delete-product" />
        </div>
    )
}

export const BasketCard = styled(BasketCardContainer)`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 15px;
    
    .image {
        width: 150px;
        height: 150px;
        fit-content: cover;
    }

    .block-info-wrapper {
        width: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }

    .block-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        width: 250px;
        font-size: 18px;
        font-weight: 600;
    }

    .count {
        display: flex;
        gap: 5px;
        align-items: center;

        svg {
            border: 1px solid silver;
            cursor: pointer;
        }
    }

    .delete-product {
        cursor: pointer;
    }
    
`