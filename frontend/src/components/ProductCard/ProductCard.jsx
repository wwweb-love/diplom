import styled from "styled-components"
import { product } from "../../reducers"

const ProductCardContainer = ({ className, imageUrl, title, id, price }) => {
    return (
        <div className={className}>
            <img className="image" src={imageUrl} alt="" />
            <div className="block-title-info">
                <h3>{title}</h3>
                <div className="info">
                    <p>id товара: {id}</p>
                    <p>Стоимость: {price}</p>
                </div>
            </div>
            <button className="btn-open-card">Открыть карточку</button>
        </div>
    )
}

export const ProductCard = styled(ProductCardContainer)`
    width: 100%;
    height: 200px;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 15px;
    padding: 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .image {
        width: 150px;
        height: 150px;
        overflow: hidden;
    }

    .block-title-info {
        width: 60%;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .btn-open-card {
        padding: 10px 15px;
        font-size: 16px;
        background-color: #005bff;
        color: #fff;
        border: 0;
        border-radius: 15px;
        cursor: pointer;
    }

    .btn-open-card:hover {
        opacity: 0.5;
    }
`