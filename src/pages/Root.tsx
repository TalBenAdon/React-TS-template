import { Outlet } from "react-router-dom";
import MainHeader from "../Components/Navigation/MainHeader";

// *** Root page, show the MainHeader (navigator) while rendering the coresponding children component with navigation use *** // 
export default function Root() {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )

}