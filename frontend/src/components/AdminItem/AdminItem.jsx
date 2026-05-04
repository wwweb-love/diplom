import styled from "styled-components"
import { Button } from "../Button/Button"

const AdminItemContainer = ({ className, data, name, index }) => {

    return (
        <div className={className}>
            <p className="index">{index + 1}</p>
            <p className="name">{name}</p>
            {Object.keys(data).map((key, index) => <Button key={index}>{key}</Button>)}
        </div>
    )
}

export const AdminItem = styled(AdminItemContainer)`

    display: flex;
    align-items: center;
    gap: 20px;

    .index {
        font-weight: 600;
    }

    .name {
        width: 100px;
    }
`