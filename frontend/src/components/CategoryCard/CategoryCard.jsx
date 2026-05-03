import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { actionSelectedCategory } from "../../actions"
import { selectorSelectedCategory } from "../../selectors"

const CategoryCardContainer = ({ className, category }) => {

    const dispatch = useDispatch()
    const { name, title } = category
    const selectedCategory = useSelector(selectorSelectedCategory)
    
    const handleClickSelectedCategory = () => {
        dispatch(actionSelectedCategory(category))
    }

    return (
        <div className={className}>
            <input 
                className="checkbox" 
                type="checkbox"
                checked={selectedCategory.title == title}
                onChange={handleClickSelectedCategory} 
                onClick={(e) => e.stopPropagation()}
            />
            <p className="category">{name}</p>
        </div>
    )
}

export const CategoryCard = styled(CategoryCardContainer)`
    display: flex;
    gap: 7px;

    .checkbox {
        cursor: pointer;
    }
`