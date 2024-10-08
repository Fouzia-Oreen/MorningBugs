import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";


const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
    console.log(tabFromUrl);
  }, [location.search])
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56 lg:w-72 ">
      {/* sidebar */}
      <DashSidebar />
      </div>

      <div className="w-full">
      {/* profile ... */}
      {tab === 'profile' && <DashProfile />}
      </div>
    </div>
  )
}

export default Dashboard
