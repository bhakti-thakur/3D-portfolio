import React from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="footer font-poppins">
        <hr className='border-slate-200' />
        <div className=' footer-container'>
            <p>
                © 2024 <strong>Bhakti Thakur</strong>
            </p>
            <div className=' flex gap-3 justify-center items-center'>
                {socialLinks.map((soclink) => (
                    <Link to={soclink.link} key={soclink.name} target='_blank'>
                        <img 
                            src={soclink.iconUrl}
                            alt={soclink.name}
                            className=' w-6 h-6 object-contain'
                        />
                    </Link>
                ) )}
            </div>
        </div>
    </footer>
  )
}

export default Footer