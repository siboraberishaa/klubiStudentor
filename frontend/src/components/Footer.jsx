import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { BiSolidChevronRight } from 'react-icons/bi'

const year = new Date().getFullYear()

const Footer = () => {

    
  return (
    <>
        <div className="container-fluid footer position-relative con-info footer-back text-dark-50 py-5 wow fadeIn">
        <div className="container">
            <div className="row g-5 py-5">
                <div className="col-lg-6 pe-lg-5">
                    <a href="/" className="navbar-brand">
                        <img src='/images/logo-rb2.png' className='logo mb-3' alt='img' />
                    </a>
                    <p className="fs-5 mb-4">Klubi studentor TIT</p>
                    <p><i className="me-2"> <FaLocationArrow /> </i>12 Qershori 61, Prizren, Kosova</p>
                    <p><i className="me-2"> <FaPhone /> </i>044123123</p>
                    <p><i className="me-2"> <FaEnvelope /> </i>klubi@gmail.com</p>
                </div>
                <div className="col-lg-6 ps-lg-5">
                    <div className="row g-5">
                        <div className="col-sm-6">
                            <h4 className="text-dark mb-4">Quick links</h4>
                            <a to='/' className='links'><button className="btn btn-link text-dark hov"><BiSolidChevronRight />home</button></a>
                            <a to='/pages/about' className='links'><button className="btn btn-link text-dark hov"><BiSolidChevronRight /> home</button></a>
                            <a to='/allproducts' className='links'><button className="btn btn-link text-dark hov"><BiSolidChevronRight /> home</button></a>
                            <a to='/pages/contact' className='links'><button className="btn btn-link text-dark hov"><BiSolidChevronRight /> home</button></a>
                        </div>
                        <div className="col-sm-6 ">
                            <h4 className="text-dark mb-4">Popular links</h4>
                            <a to='/' className='links'><button className="btn btn-link text-dark hov"><BiSolidChevronRight />home</button></a>
                            <a to='/pages/about' className='links'><button className="btn btn-link text-dark hov"><BiSolidChevronRight /> home</button></a>
                            <a to='/allproducts' className='links'><button className="btn btn-link text-dark hov"><BiSolidChevronRight /> home</button></a>
                            <a to='/pages/contact' className='links'><button className="btn btn-link text-dark hov"><BiSolidChevronRight /> home</button></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid copyright footer-back text-dark-50 py-4">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <p className="mb-0">&copy; {year} All rights reserved. Distributed by: sample sample </p>
                </div>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer