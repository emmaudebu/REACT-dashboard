import React from 'react'
import "../../Createrecords.css"


const CreateRecords = () => {
  return (
    <div className='createrecords'>
       <h2>Create Medical Records</h2>
      <h4>Dashboard</h4>
      <section className="create-form">
        <h3>Input Patient Records</h3>
        <form action="">
          <div>

            <p><abel>Name</abel></p>
            <input type="text" placeholder="Patient's Name"/>
          </div>
          <div>

            <p><label>Patient Card No</label></p>
            <input type="text" placeholder="Patient's card number"/>
          </div>
          <div>

            <p><label>Patient Age</label></p>
            <input type="number" placeholder="Patient's Age"/>
          </div>
          <div>

            <label>Patient Sex</label>
            <select name="" id="">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
        </select>
          </div>

        </form>
      </section>
          

    </div>
  )
}

export default CreateRecords