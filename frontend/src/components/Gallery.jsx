import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Gallery = () => {
  return (
    <>
        <div className="container-wrap">
    		<div className="row no-gutters">
					<div className="col-md-3 ftco-animate">
						<a href="images/image_1.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: "url(/images/about-1.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span><FaInstagram /></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="images/image_2.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: "url(/images/about-1.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span><FaInstagram /></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="images/image_3.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: "url(/images/about-1.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span><FaInstagram /></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="images/image_4.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: "url(/images/about-1.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span><FaInstagram /></span>
    					</div>
						</a>
					</div>
        </div>
    	</div>

        </>
  )
}

export default Gallery