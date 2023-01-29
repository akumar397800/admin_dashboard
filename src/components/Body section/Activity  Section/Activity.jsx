import React from 'react'
import './activity.css'
import {BsArrowRightShort} from 'react-icons/bs'
import img from '../../../Assets/face.jpg'

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
            <img src={img} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>Ola Martin</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={img} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>Ola Martin</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={img} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>Ola Martin</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={img} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>Ola Martin</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={img} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>Ola Martin</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 minutes ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={img} alt="Customer Image" />
            <div className="customerDetails">
              <span className='name'>Ola Martin</span>
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