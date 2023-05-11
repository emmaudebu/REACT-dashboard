import React from 'react'
import "../../DashBoard.css"
import calendar from "../assets/calendar.svg"
import women from "../assets/women.svg"
import money from "../assets/money.svg"

const DashBoard = () => {
  return (
      <section className='dashBoard'>
          <h2>ZLG DashBoard</h2>
          <h4>Dashboard</h4>
          <div className="dashSection">
              <div className="section-info">
                  <span className='one' ><img src={calendar} className='bx' /></span> <h3>Men</h3>
              </div>
              <div className="section-info">
                  <span className='two'><img src={women} className='bx' /></span> <h3>Women</h3>
             </div>
              <div className="section-info">
                  <span className='three'><img src={money} className='bx' /></span> <h3>Total Records</h3>
             </div>
          </div>
          
    </section>
  )
}

export default DashBoard