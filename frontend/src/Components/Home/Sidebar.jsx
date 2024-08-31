import React from 'react'
import { Data } from '../../Assets/SidebarData'
import { Link } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { useAuthcontext } from '../../Context/AuthContext'

const Sidebar = () => {
    const {authUser} = useAuthcontext();
    return authUser && (
        <>
            <div className=''>
                <h2 className='text-xl font-extrabold'>The Code <span className='text-red-500'>Master</span></h2>
                <h2 className='my-1 text-sm text-gray-300'>{authUser.email}</h2>
                <hr />
            </div>
            <div>
                {Data.map((item, idx) => (
                    <Link to={item.link} className='m-2 flex gap-4 items-center rounded-md p-2 hover:bg-gray-600 transition-all duration-300' key={idx}> <item.icon /> {item.title}</Link>
                ))}
            </div>
            <div><button className='btn btn-outline gap-3 w-full'>Logout <LogOut /></button></div>
        </>
    )
}

export default Sidebar