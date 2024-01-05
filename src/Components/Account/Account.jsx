import React from 'react'
import './account.css'
import { BiChevronRight } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import user from "../../assets/man.png"

function Account() {
  return (
    <div className='account'>
      <div className='icons flex'>
      <BiChevronRight className='icon' />
      <BsThreeDotsVertical className='icon' />
      </div>

      <div className="accountDetails">
        <div className="imageDiv">
          <img src={user} alt='account' />
          <span className="name">Losta Elkaref</span>
          <span className="position">King of the Seven Realms</span>
          <button className="btn flex">
            <BiEdit className='icon' />
            Edit Profile
          </button>
        </div>

        <div className="hoursDiv">
          <span className="title">Working Hours</span>
          <div className="hoursCard flex">
            <div className="right bg">
                <span>Work Starts</span>
                <h6>09:00 am</h6>
            </div>
            <div className="left nobg">
                <span>Work Ends</span>
                <h6>05:00 pm</h6>
            </div>
          </div>
        </div>

      <h1 className='city'>Shoubra City</h1>
      <span className="reigon">Cairo,GMT+2</span>

      </div>
    </div>
  )
}

export default Account