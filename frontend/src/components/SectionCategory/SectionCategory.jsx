import styled from "styled-components"
import { CategoryCard } from "../CategoryCard/CategoryCard"

const SectionCategoryContainer = ({ className }) => {
    return (
        <div className={className}>
            <h2>Категории</h2>

            <div className="block-categories">
                <CategoryCard title="Одежда" />
                <CategoryCard title="Электроника" />
                <CategoryCard title="Недвижимость" />
                <CategoryCard title="Авто" />
            </div>
        </div>
    )
}

export const SectionCategory = styled(SectionCategoryContainer)`
    width: 18%;
    display: flex;
    align-self: start;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 15px;

    .block-categories {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`