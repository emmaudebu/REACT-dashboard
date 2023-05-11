import React from 'react'
import "../../Navbar.css"
import Bars from "../assets/menuBars.svg"
import search from "../assets/search.svg"
import toggle from "../assets/toggle.svg"
import user from "../assets/user-1.png"
import CreateAdmin from './CreateAdmin';
import DashBoard from './DashBoard';
import DataRepresentation from './DataRepresentation';
import MedicalRecords from './MedicalRecords';
import CreateRecords from "./CreateRecords"

import { BrowserRouter, Link, Route,Routes } from 'react-router-dom'


const SideBar = () => {
  return (
      <nav>
          <header>
              <section className="logo">
                  <i class='bx bx-plus-medical'> </i>
                  <h2>ZLG</h2>
              </section>
              <section className="search">
                  <img src={Bars} alt="" className="MenuBars" />
                  <h3 className="search-label">Categories</h3>
                  <div className="search-input">
                      
                      <input type="text" className="" placeholder="Search......." />
                      <button><img src={search} alt="" /></button>
                  </div>
              </section>
              <section className="profile-img">
                  <img src={toggle} alt=""  className='toggle'/>
                  <img src={user} alt=""  className='user-img'/>
              
              </section>
          </header>
          <div className='mm'>
              <section className="sideBars">
                  
             <Link to="/" > <button  className='link'><i class='bx bxs-dashboard'> </i>  Dashboard</button></Link>
             <Link to="/medicalrecords" > <button className='link'><i class='bx bx-plus-medical'>   </i> Medical Records</button></Link>
              <Link to='/createrecords'><button className='link'><i class='bx bx-user-plus' ></i>  Create Records</button></Link>
              <Link to='/datarepresentation'><button className='link'> <i class='bx bx-bar-chart'></i>  Data Representation</button></Link>
              <Link to='/createadmin'><button className='link'> <i class='bx bx-user'></i>  Creat Admin</button></Link>
              
              </section>

              <div className="pages">
                  
<Routes>
                          <Route path='/' element={<DashBoard />} />
                          <Route path='/createrecords' element={<CreateRecords />} />
                          <Route path='/createadmin' element={<CreateAdmin />} />
                          <Route path='/datarepresentation' element={<DataRepresentation />} />
                          <Route path='/medicalrecords' element={<MedicalRecords />} />
               
                          
                  </Routes>

             
              </div>
          
          </div>
         
    </nav>
  )
}

export default SideBar