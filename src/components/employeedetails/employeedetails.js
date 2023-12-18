import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Employee from '../employee/employee';
import LeaveForm from '../leaveform/leaveform';

export default function EmployeeDetails() {
  const { id } = useParams();
  const [employeedetails, setEmployeedetails] = useState([]);
  const [updateEmployeeDetails, setUpdateEmployeeDetails] = useState(false);


  const emplistStyle = {
    height: '750px',
    overflowY: 'scroll',
  };

  useEffect(() => {
    fetch(`http://localhost:5000/employees/${id}`)
      .then(response => response.json())
      .then(dataemp => {
        setEmployeedetails(dataemp);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id,updateEmployeeDetails]);

  const handleUpdateEmployeeDetails = () => {
    setUpdateEmployeeDetails(prevState => !prevState);
  };

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-3">
        <div>
          <Employee />
        </div>
      </div>
      <div className="col-9">
        {employeedetails.map(dataemp => (
          <div>
            <h1>Details of {dataemp.firstname} {dataemp.lastname}</h1>
            <p>
            <strong> Firstname: </strong>{dataemp.firstname} <br/> <strong> Lastname: </strong>{dataemp.lastname}
            </p>
            <p>
            <strong> Email: </strong> {dataemp.email}  <br/> <strong> Phone number: </strong> {dataemp.phone} 
            </p>
            <p>
             <strong> Title: </strong> {dataemp.title}
            </p>
            <p>
              <h1>Leave details</h1>
              <strong>Leaves taken:</strong> {dataemp.leaves} <br/> <strong>Maximum leaves: </strong>{dataemp.max_leaves}
            </p>
            <LeaveForm onLeaveSubmit={handleUpdateEmployeeDetails} />
          </div>
        ))}
      </div>
    </div>
  </div>


  );
}
