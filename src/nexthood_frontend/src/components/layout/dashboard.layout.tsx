import { Outlet } from "react-router-dom"
import DashboardHeader from "../ui/DashboardHeader"

const DashboardLayout = () => {
  return (
    <div>
        <DashboardHeader />
        <Outlet />
    </div>
  )
}

export default DashboardLayout