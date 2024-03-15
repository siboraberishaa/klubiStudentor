import React from 'react'

const Blog = () => {
  return (
    <>
<div className="container p-5">
    <div className="row">
      <div className="col-12 text-center pb-3">
        <h1 className="section-title">Latest News From Our Blog</h1>
      </div>
    </div>
    <div className="row justify-content-center">
  <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card rounded-0 hover-shadow" style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid #dee2e6'}}>
      <img className="card-img-top rounded-0" src="/images/blog-sample.jpeg" alt="Post thumb" />
      <div className="card-body">
        <ul className="list-inline mb-3">
          <li className="list-inline-item mr-3 ml-0">August 28, 2019</li>
        </ul>
        
          <h3 className="card-title fw-bold blog-title">The Expenses You Are Thinking.</h3>
       
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
        <div className='pt-2'>
            <button className="btn btn-primary btn-md" style={{border: 'none'}}>read more</button>
        </div>
      </div>
    </div>
  </article>

  <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card rounded-0 hover-shadow" style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid #dee2e6'}}>
      <img className="card-img-top rounded-0" src="/images/blog-sample.jpeg" alt="Post thumb" />
      <div className="card-body">
        <ul className="list-inline mb-3">
          <li className="list-inline-item mr-3 ml-0">August 13, 2019</li>
        </ul>
        
          <h3 className="card-title fw-bold blog-title">Tips to Succeed in an Online Course</h3>
        
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
        <div className='pt-2'>
            <button className="btn btn-primary btn-md" style={{border: 'none'}}>read more</button>
        </div>
      </div>
    </div>
  </article>
  <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card rounded-0 hover-shadow" style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid #dee2e6'}}>
      <img className="card-img-top rounded-0" src="/images/blog-sample.jpeg" alt="Post thumb" />
      <div className="card-body">
        <ul className="list-inline mb-3">
          <li className="list-inline-item mr-3 ml-0">August 24, 2018</li>
        </ul>
        
          <h3 className="card-title fw-bold blog-title">Orientation Program for the new students</h3>
       
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
        <div className='pt-2'>
            <button className="btn btn-primary btn-md" style={{border: 'none'}}>read more</button>
        </div>
      </div>
    </div>
  </article>
</div>
  </div>
    </>
  )
}

export default Blog