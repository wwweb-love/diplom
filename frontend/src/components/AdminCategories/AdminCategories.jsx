import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectorAdminCategoriesData } from "../../selectors"
import { AdminItem } from "../AdminItem/AdminItem"
import { Button } from "../Button/Button"

const AdminCategoriesContainer = ({ className }) => {

    const adminCategoriesData = useSelector(selectorAdminCategoriesData)
    console.log("categories", adminCategoriesData)

    return (
        <div className={className}>
            <h2>Категории</h2>
            <Button className="btn-add-category">Добавить категорию</Button>
            {adminCategoriesData && adminCategoriesData.map((category, index) => <AdminItem key={index} data={category} name={category.name} index={index} />)}
        </div>
    )
}

export const AdminCategories = styled(AdminCategoriesContainer)`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .btn-add-category {
        display: flex;
        align-self: start;
    }
`