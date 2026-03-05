import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100  mx-auto bg-[#FFFFFF]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changlogh</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
     <li><a>Contact</a></li>
      </ul>
    </div>
   <h1 className='text-[#130B2D] text-2xl font-bold'>CS — Ticket System</h1>
  </div>
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changlogh</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
     <li><a>Contact</a></li>
    <button className='bg-linear-to-r from-[#422AD5] to-[#9F62F2] text-white p-2 border-none rounded-md'>+  New Ticket</button>
    </ul>
  </div>
  
</div>
  )
}

export default Navbar