import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className=' header '>
        <div >
            <NavLink to="/" className=' w-12 h-12 rounded-lg shadow-xl bg-slate-50 items-center justify-center flex font-bold ' >
                <p className=' blue-gradient_text text-2xl '>BT</p>
            </NavLink>
        </div>
        <div>
            <nav className=' flex text-lg gap-7 font-medium pt-9 '>
                <div>
                    <NavLink to='/about' className={ ({isActive}) =>isActive?'text-blue-500': 'text-black' }>
                        About
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/projects' className={ ({isActive}) =>isActive?'text-blue-500': 'text-black' }>
                        Projects
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/contact' className={ ({isActive}) =>isActive?'text-blue-500': 'text-black' }>
                        Contact
                    </NavLink>
                </div>
            </nav>
        </div>
    </header> 
  )
}

export default Navbar
