import { Outlet } from "react-router-dom";
import MainHeader from "../Components/Navigation/MainHeader";


export default function Root() {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )

}