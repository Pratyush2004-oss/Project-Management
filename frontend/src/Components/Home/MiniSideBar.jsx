import React from 'react'
import { Data } from '../../Assets/SidebarData'
import { Link } from 'react-router-dom'
import { LogOut, Menu } from 'lucide-react'

const MiniSideBar = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn my-2 btn-outline drawer-button lg:hidden">
                    <Menu />
                </label>
            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <div className='h-[90vh] p-3 flex flex-col justify-between'>
                        <div className=''>
                            <h2 className='text-xl font-extrabold'>The Code <span className='text-red-500'>Master</span></h2>
                            <h2 className='my-1 text-sm text-gray-300'>tcm@gmail.com</h2>
                            <hr />
                        </div>
                        <div>
                            {Data.map((item, idx) => (
                                <Link to={item.link} className='m-2 flex gap-4 items-center rounded-md p-2 hover:bg-gray-600 transition-all duration-300' key={idx}> <item.icon /> {item.title}</Link>
                            ))}
                        </div>
                        <div><button className='btn btn-outline gap-3 w-full'>Logout <LogOut /></button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniSideBar