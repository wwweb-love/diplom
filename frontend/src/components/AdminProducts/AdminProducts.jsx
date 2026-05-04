import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectorAdminProductsData } from "../../selectors"
import { AdminItem } from "../AdminItem/AdminItem"
import { Button } from "../Button/Button"

const AdminProductsContainer = ({ className }) => {

    const adminProductsData = useSelector(selectorAdminProductsData)
    console.log("products", adminProductsData)
    
    return (
        <div className={className}>
            <h2>Продукты</h2>
            <Button className="btn-add-product">Добавить продукт</Button>
            {adminProductsData && adminProductsData.map((product, index) => <AdminItem key={index} data={product} name={product.title} index={index} />)}
        </div>
    )
}

export const AdminProducts = styled(AdminProductsContainer)`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .btn-add-product {
        display: flex;
        align-self: start;
    }
`