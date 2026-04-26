import styled from "styled-components"
import SearchSVG from "../../assets/svg/search.svg?react"

const SearchContainer = ({ className }) => {
    return (
        <div className={className}>
            <input className="input-search" type="text" placeholder="Поиск товаров.." />
            <SearchSVG />
        </div>
    )
}

export const Search = styled(SearchContainer)`
    display: flex;
    width: 40%;
    height: 40px;
    margin: 0 auto;

    .input-search {
        width: 90%;
        border-left: 2px solid #005bff;
        border-bottom: 2px solid #005bff;
        border-top: 2px solid #005bff;
        border-right: 0;
        padding: 5px 10px;
        font-size: 18px;
    }

    .input-search:focus {
        outline: 0;
    }

    svg {
        width: 10%;
        background-color: #005bff;
        height: 40px;
        padding: 7px;
        border-radius: 0 10px 10px 0;
        cursor: pointer;
    }
`