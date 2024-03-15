import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
                        <img className="position-absolute w-100 h-100" src="/images/about-1.jpg" alt="" style={{objectFit: 'cover'}} />
                        <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3 img-fluid" src="/images/logo.jpg" alt="" style={{width: '200px', height: '200px'}} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="h-100">
                        <h6 className="text-uppercase mb-2" style={{color: '#F5761A'}}>About Us</h6>
                        <h1 className="display-5 mb-4 fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-2 mb-4 pb-2">
                            <div className="col-sm-6">
                                <i className="me-2"><FaCheck color='#F5761A' /></i>Fully Licensed
                            </div>
                            <div className="col-sm-6">
                                <i className="me-2"><FaCheck color='#F5761A' /></i>Online Tracking
                            </div>
                            <div className="col-sm-6">
                                <i className="me-2"><FaCheck color='#F5761A' /></i>Afordable Fee 
                            </div>
                            <div className="col-sm-6">
                                <i className="me-2"><FaCheck color='#F5761A' /></i>Best Trainers
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-sm-6">
                                <a className="btn btn-primary py-3 px-5" href="!#">Read More</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About