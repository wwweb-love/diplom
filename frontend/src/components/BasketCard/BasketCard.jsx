import styled from "styled-components"
import CloseSVG from "../../assets/svg/close.svg?react"
import PlusSVG from "../../assets/svg/plus.svg?react"
import MinusSVG from "../../assets/svg/minus.svg?react"
import DeleteSVG from "../../assets/svg/delete.svg?react"

const BasketCardContainer = ({ className, product }) => {

    const { _id, title, price, image_url, count, discount, category, createdAt } = product

    return (
        <div className={className}>
            <img className="image" src={image_url} alt="" />

            <div className="block-info-wrapper">
                <p className="id">id товара: {_id}</p>
                <div className="block-info">
                    <p className="title">{title}</p>
                    <p className="count">Количество:<PlusSVG />{count}<MinusSVG /></p>
                    <p className="price">Стоимость: {price}</p>
                </div>
            </div>
            
            <DeleteSVG className="delete-product" />
        </div>
    )
}

export const BasketCard = styled(BasketCardContainer)`
    width: 800px;
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
        width: 500px;
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