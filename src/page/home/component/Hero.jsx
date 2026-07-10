import React from 'react'
import {Link} from 'react-router'

export const Hero = () => {
  return (
    <div className='container-lg container-fluid '>
        <div className='row text-center'>
            <img src="/images/homeHero.png" alt="hero" className='mb-3' />
            <h1>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="btn btn-primary p-2 fs-5" type="submit" style={{width:"25%",margin:"0 auto"}} > <Link to={'/signup'} style={{color:"white"}} >Sign up for free</Link> </button>
        </div>
        
    </div>
  )
}
