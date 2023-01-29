import React from 'react'
import './top.css'
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'


import img from '../../../Assets/face.jpg'
import video from '../../../Assets/video.mp4'
import img2 from '../../../Assets/left.jpg'


const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
         <div className="title">
           <h1>Welcome to Admini.</h1>
           <p>Hello friends welcome to the eite !</p>
         </div>  

         <div className='searchBar flex'>
           <input type="text" placeholder='Search Dashboard'/>
           <BiSearchAlt className="icon"/>
         </div>

         <div className="adminDiv flex">
          <TbMessageCircle className='icon'/>
          <MdOutlineNotificationsNone className="icon"/>
          <div className="adminImage">
            <img src={img} alt="Admin Image"/>
          </div>
         </div>

      </div>

      <div className='cardSection flex'>
        <div className='rightCard'>
          <div className='hh'>
          <h1>Create and sell extraordinary products</h1>
          <p>The world fast growing industry today are natural made products</p>
          </div>
            <div className='buttons flex'>
              <button className='btn'>Explore More</button>
              <button className='btn transparent'>Top Sellers</button>

            </div>
            <div className='videoDiv'>
                <video src={video} autoPlay loop muted></video>

            </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>My State</h1>

              <div className='flex'>
                <span>
                  Today <br /><small>4 Orders</small>
                </span>
                <span>
                  This Month <br /><small>175 Orders</small>
                </span>
              </div>


              <span className='flex link'>
                Go to my Orders<BsArrowRightShort className="icon"/>

              </span>
            </div>
            {/* <div className='imgDiv'>
              <img src={img2} alt="Image name" />
              
            </div> */}



          </div>
        </div>
      </div>
    </div>
  )
}

export default Top