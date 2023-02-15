import React from 'react'
import './listing.css'



import imgs1 from '../../../Assets/prod1.jpg'
import imgs2 from '../../../Assets/prod2.jpg'
import imgs3 from '../../../Assets/prod3.jpg'
import imgs4 from '../../../Assets/prod4.jpg'


import img1 from '../../../Assets/user7.jpeg'
import img2 from '../../../Assets/user8.jpg'
import img3 from '../../../Assets/user9.jpg'
import img4 from '../../../Assets/user10.jpg'


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
          <img src={imgs1} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={imgs2} alt="Image Name" />
          <h3>Himbaku</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={imgs3} alt="Image Name" />
          <h3>Kukuntanu</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={imgs4} alt="Image Name" />
          <h3>Akara pierce</h3>
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
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
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
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
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