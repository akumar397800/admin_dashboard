import React from 'react'
import './activity.css'
import {BsArrowRightShort} from 'react-icons/bs'

import img1 from '../../../Assets/user1.jpg'
import img2 from '../../../Assets/user2.jpg'
import img3 from '../../../Assets/user3.jpg'
import img4 from '../../../Assets/user4.jpg'
import img5 from '../../../Assets/user5.jpg'
import img6 from '../../../Assets/user6.jpg'


const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="seeContainer grid">
          <div className="singleCustomer flex">
            <img src={img1} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>Ola Martin</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={img2} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>Kia khamba</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={img3} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>Xang Wuang</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={img4} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>justin Bieber</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={img5} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>Ronda makhan</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={img6} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>kim John</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
      </div>
    </div>
  )
}

export default Activity