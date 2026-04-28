import styled from "styled-components"
import { CategoryCard } from "../CategoryCard/CategoryCard"
import { useEffect, useState } from "react"
import { getCategories } from "../../api"
import { actionCategories } from "../../actions"
import { Loader } from "../../components"
import { useSelector, useDispatch } from "react-redux"
import { selectorCategories } from "../../selectors"

const SectionCategoryContainer = ({ className }) => {
    const dispatch = useDispatch()
    const [isLoadingCategories, setIsLoadingCategories] = useState(true)

    useEffect(() => {
        setIsLoadingCategories(true)

        getCategories().then((laoded) => {
            dispatch(actionCategories(laoded))
            setIsLoadingCategories(false)
        })

    }, [])

    const categories = useSelector(selectorCategories)

    return (
        <div className={className}>
            <h2>Категории</h2>
            {isLoadingCategories ? <Loader /> : <div className="block-categories">
                {categories.map(category => <CategoryCard key={category._id} title={category.name} />)}
            </div>}
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
    position: relative;

    .block-categories {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`