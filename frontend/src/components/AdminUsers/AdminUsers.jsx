import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectorAdminUsersData } from "../../selectors"
import { AdminItem } from "../AdminItem/AdminItem"
import { Button } from "../Button/Button"
// import { AdminUser } from "../AdminUser/AdminUser"

const AdminUsersContainer = ({ className }) => {

    const adminUsersData = useSelector(selectorAdminUsersData)

    return (
        <div className={className}>
            <h2>Пользователи</h2>
            <Button className="btn-add-user">Добавить пользователя</Button>
            {adminUsersData && adminUsersData.map((user, index) => <AdminItem key={index} data={user} name={user.name} index={index} />)}
        </div>
    )
}

export const AdminUsers = styled(AdminUsersContainer)`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .btn-add-user {
        display: flex;
        align-self: start;
    }
`