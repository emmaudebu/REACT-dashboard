import React from 'react'
import "../../medicalrecords.css"

const MedicalRecords = () => {
  return (
    <section className="MedicalRecords">
      <h2>Medical Records</h2>
      <h4>Dashboard</h4>
      <div className="table">
        <h2 className='title'>Patient Records</h2>
        <table >
          <thead>
          <tr className='head'>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Marital Status</th>
            <th>Next Of Kin</th>
            <th>Next Of Kin Phone number</th>
          </tr></thead>
          <tr>

            <td>John</td>
            <td>44</td>
            <td>Male</td>
            <td>08137935760</td>
            <td>12 iba street iba estate iba ojo</td>
            <td>Single</td>
            <td>Uchenna</td>
            <td>098765432178</td>
          </tr>
        </table>

      </div>
    </section>

  )
}

export default MedicalRecords