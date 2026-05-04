import styled from "styled-components"
import { useState, useEffect } from "react"
import { AdminUsers, AdminProducts, AdminCategories, Loader } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { actionAdminCategoriesData, actionAdminProductsData, actionAdminUsersData, actionGlobalError } from "../../actions"
import { selectorAdminCategoriesData, selectorAdminProductsData, selectorAdminUsersData } from "../../selectors"
import { useNavigate } from "react-router"

const AdminContainer = ({ className }) => {

    const [activeSection, setActiveSection] = useState("users")
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    // const adminUsersData = useSelector(selectorAdminUsersData)
    // const adminProductsData = useSelector(selectorAdminProductsData)
    // const adminCategoriesData = useSelector(selectorAdminCategoriesData)
    

    useEffect(() => {
        setIsLoading(true)
        
        fetch(`http://localhost:3000/admin/${activeSection}`, {credentials: 'include'})
            .then(loaded => loaded.json())
            .then(loaded => {
                const { data, error } = loaded

                if (error) {
                    dispatch(actionGlobalError(error))
                    navigate("/errors")
                }

                if (activeSection == "users") {
                    dispatch(actionAdminUsersData(data))
                    console.log(data)
                } else if (activeSection == "products") {
                    dispatch(actionAdminProductsData(data))
                    console.log(data)
                } else if (activeSection == "categories") {
                    dispatch(actionAdminCategoriesData(data))
                    console.log(data)
                }
            })
            .finally(() => setIsLoading(false))

    }, [activeSection])

    return (
        <div className={className}>
            <div className="section-data">
                <button onClick={() => setActiveSection("users")} className={activeSection == "users" ? "btn-active link-section" : "link-section"}>Пользователи</button>
                <button onClick={() => setActiveSection("products")} className={activeSection == "products" ? "btn-active link-section" : "link-section"}>Продукты</button>
                <button onClick={() => setActiveSection("categories")} className={activeSection == "categories" ? "btn-active link-section" : "link-section"}>Категории</button>
            </div>

            {isLoading ? <Loader /> : <>
                {activeSection == "users" && <AdminUsers />}
                {activeSection == "products" && <AdminProducts />}
                {activeSection == "categories" && <AdminCategories />}
            </>}

        </div>
    )
}

export const Admin = styled(AdminContainer)`

    display: flex;
    flex-direction: column;
    gap: 20px;

    .section-data {
        display: flex;
        gap: 20px;
    }
    button {
        padding: 10px 15px;
        font-size: 16px;
        background-color: #ffffff;
        color: black;
        border: 1px solid #005bff;
        border-radius: 15px;
        cursor: pointer;
    }

    .btn-active {
        background-color: #005bff;
        color: #fff;
    }

    button:hover {
        opacity: 0.5;
    }
`