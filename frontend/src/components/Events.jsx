import React from 'react'
import { SlLocationPin } from "react-icons/sl";

const Events = () => {
  return (
    <>
        
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center section-title justify-content-between">
          <h1 className="mb-0 text-nowrap mr-3">Upcoming Events</h1>
          <div>
            <a href="events.html" className="btn btn-primary-outline ml-sm-3 d-none d-sm-block">See all events</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
 
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src="/images/about-2.jpg" alt="event thumb" />
        <div className="card-date"><span>18</span><br />March</div>
      </div>
      <div className="card-body">
        
        <p><i className="me-2"><SlLocationPin color='#F5761A' /></i>UPZ, Prizren</p>
        <h4 className="card-title">Some sample event title</h4>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reprehenderit quam asperiores ut quibusdam quasi cupiditate</div>
        <div className='pt-3'>
            <button className='btn btn-md btn-primary-outline'>See more</button>
        </div>
      </div>
    </div>
  </div>
 
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src="/images/about-2.jpg" alt="event thumb" />
        <div className="card-date"><span>18</span><br />March</div>
      </div>
      <div className="card-body">
        
        <p><i className="me-2"><SlLocationPin color='#F5761A' /></i>UPZ, Prizren</p>
        <h4 className="card-title">Some sample event title</h4>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reprehenderit quam asperiores ut quibusdam quasi cupiditate</div>
        <div className='pt-3'>
            <button className='btn btn-md btn-primary-outline'>See more</button>
        </div>
      </div>
    </div>
  </div>
 
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src="/images/about-2.jpg" alt="event thumb" />
        <div className="card-date"><span>18</span><br />March</div>
      </div>
      <div className="card-body">
       
        <p><i className="me-2"><SlLocationPin color='#F5761A' /></i>UPZ, Prizren</p>
        <h4 className="card-title">Some sample event title</h4>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reprehenderit quam asperiores ut quibusdam quasi cupiditate</div>
        <div className='pt-3'>
            <button className='btn btn-md btn-primary-outline'>See more</button>
        </div>
      </div>
    </div>
  </div>
</div>
    
    <div className="row">
      <div className="col-12 text-center">
        <a href="course.html" className="btn btn-md btn-primary-outline d-sm-none d-inline-block">See all events</a>
      </div>
    </div>
  </div>


    </>
  )
}

export default Events