import Navbar from "./Navbar"

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between py-6 px-[5%] lg:px-[8%]">
        <div><h1 className=" text-2xl md:text-4xl font-logo text-primary font-black">NEXTHOOD</h1></div>
        <Navbar />
    </div>
  )
}

export default DashboardHeader