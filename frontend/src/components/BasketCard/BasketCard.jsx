import styled from "styled-components"
import CloseSVG from "../../assets/svg/close.svg?react"
import PlusSVG from "../../assets/svg/plus.svg?react"
import MinusSVG from "../../assets/svg/minus.svg?react"
import DeleteSVG from "../../assets/svg/delete.svg?react"

const BasketCardContainer = ({ className, product }) => {
    const { _id, title, price, image_url, count, discount, category, createdAt } = product.productId
    
    return (
        <div className={className}>
            <img className="image" src={image_url} alt="" />

            <div className="block-info-wrapper">
                <p className="id">id товара: {_id}</p>
                <div className="block-info">
                    <p className="title">{title}</p>
                    <p className="count">На складе: {count}</p>
                    <p className="count">Выбрали:<PlusSVG />{product.selected_count}<MinusSVG /></p>
                    <p className="price">Стоимость: {price * product.selected_count}</p>
                </div>
            </div>
            
            <DeleteSVG className="delete-product" />
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