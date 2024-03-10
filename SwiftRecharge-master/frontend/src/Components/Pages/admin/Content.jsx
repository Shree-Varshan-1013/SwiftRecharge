import React, { useEffect, useState } from 'react'
// import AddPlan from './AddPlan';
import UserDetails from './UserDetails';
import RechargeHistory from './RechargeHistory';
import AdminForm from './AdminForm';
import ViewPlans from './ViewPlans';
import AdminDashboard from './AdminDashboard';
import OverAll from './OverAll';

const Content = ({activeLink}) => {

    const [content,setContent] = useState(null);

    useEffect(() => {
        const arr = {
            link1: <AdminDashboard/>,
            link2: <OverAll/>,
            link3: <RechargeHistory/>,
            link4: <UserDetails/>   
        }
        setContent(arr[activeLink])
    }, [activeLink])


  return (
    <div className='flex justify-center items-center'>
      {content}
    </div>
  )
}

export default Content
