import { Outlet } from "react-router-dom"
import DashboardHeader from "../ui/DashboardHeader"

const EventsLayout = () => {
    return (
        <div>
            <DashboardHeader />
            <Outlet />
        </div>
    )
}

export default EventsLayout;