import styled from "styled-components"
import { useParams } from "react-router"

const SectionPathToProductContainer = ({ className }) => {

    const params = useParams()

    return (
        <div className={className}>Товары - {params.category} - {params.id}</div>
    )
}

export const SectionPathToProduct = styled(SectionPathToProductContainer)`
    // width: 100%;
    display: flex;
    align-self: start;
    justify-self: start;
    
`