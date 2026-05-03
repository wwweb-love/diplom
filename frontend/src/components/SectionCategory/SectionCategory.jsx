import styled from "styled-components"
import { CategoryCard } from "../CategoryCard/CategoryCard"
import { useEffect, useState } from "react"
import { getCategories } from "../../api"
import { actionCategories, actionGlobalError } from "../../actions"
import { Loader } from "../../components"
import { useSelector, useDispatch } from "react-redux"
import { selectorCategories } from "../../selectors"
import { useNavigate } from "react-router"
import { useFetchData } from "../../hooks"

const SectionCategoryContainer = ({ className }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { fetchData, isLoading, setIsLoading } = useFetchData()
    const categories = useSelector(selectorCategories)
    
    useEffect(() => {
        if (!categories.length) {
            fetchData(getCategories, actionGlobalError, actionCategories)
        }
    }, [])


    return (
        <div className={className}>
            <h2>Категории</h2>
            {isLoading || !Object.keys(categories).length ? <Loader /> : <div className="block-categories">
                {categories.map(category => <CategoryCard key={category._id} category={category} />)}
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