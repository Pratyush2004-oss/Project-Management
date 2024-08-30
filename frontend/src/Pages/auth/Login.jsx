import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <div className='p-4 md:w-1/2 rounded-lg bg-gray-800 shadow-xl'>
        <h1 className='text-3xl border-b-2 p-2 text-center'>Login</h1>
        <form className='my-3'>
          {/* Username */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input type="text" placeholder="Username" className="input input-bordered w-full" />
          </label>
          {/* email */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="email" placeholder="xyz@example.com" className="input input-bordered w-full" />
          </label>
          {/* password */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input type="password" placeholder="Password" className="input input-bordered w-full" />
          </label>
          <button className='btn w-full mt-5 btn-info'>Login</button>
        </form>
        <span className='p-2'>Didn't have a account <Link to={'/signup'} className='text-blue-500 '>Signup</Link></span>
      </div>
    </div>
  )
}

export default Login