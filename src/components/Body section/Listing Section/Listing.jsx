import React from 'react'
import './listing.css'
import img from '../../../Assets/sign.jpg'

import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>My Listing</h1>
        <button className='btn flex'>
          See all <BsArrowRightShort className='icon'/>

        </button>
      </div>

      <div className='seeContainer flex'>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className='sellers flex'>
        <div className='topselllers'>
          <div className='heading flex'>
            <h3>Top sellers</h3>
            <button className='btn flex'>
          See all <BsArrowRightShort className='icon'/>

        </button>
            </div>

            <div className="card flex">
              <div className='users'>
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
              </div>
              <div className="cardText">
                <span>
                  14.556 Plant sold <br />
                  <small>
                    21 sellers <span className='date'> 7 Days</span>
                  </small>
                </span>
              </div>
            </div>
        </div>
        <div className='featuredsellers'>
          <div className='heading flex'>
            <h3>Top sellers</h3>
            <button className='btn flex'>
          See all <BsArrowRightShort className='icon'/>

        </button>
            </div>

            <div className="card flex">
              <div className='users'>
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
              </div>
              <div className="cardText">
                <span>
                  14.556 Plant sold <br />
                  <small>
                    21 sellers <span className='date'> 7 Days</span>
                  </small>
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Listing