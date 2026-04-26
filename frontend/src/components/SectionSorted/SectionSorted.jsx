import styled from "styled-components"

const SectionSortedContainer = ({ className }) => {

    return (
        <div className={className} onClick={() => setShowOptions(!showOptions)}>
            <h2>Сортировка</h2>
            <div className="block-option active">Дороже</div>
            <div className="block-option">Дешевле</div>
        </div>
    )
}

export const SectionSorted = styled(SectionSortedContainer)`
    display: flex;
    align-items: center;
    gap: 20px;
    align-self: start;

    .block-option {
        cursor: pointer;
        background-color: #fff;
        padding: 10px 20px;
        border-radius: 15px;
    }

    .block-option:hover {
        opacity: 0.5;
    }

    .active {
        border: 2px solid #005bff;
    }
`