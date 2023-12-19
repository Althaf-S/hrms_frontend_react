import {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './employee.css'

export default function Employee(){

    const [employee, setEmployee] = useState([]);
    const emplistStyle = {
        height: '770px', 
        overflowY: 'scroll', 
      };

      const linkStyle = {
        color: '#006400',
      };
    
    useEffect(() => {
        fetch('http://localhost:5000/employees')
          .then(response => response.json())
          .then(data => {setEmployee(data) 
          });
      },[]);
    return (
    <div className='container-fluid'>
            <h1>List of employees</h1>
            <ul>
            <div style={emplistStyle}>
              {employee.map((data => 
                <p>
                  <NavLink to={`/employees/${data.id}`} className="navbar-brand" style={linkStyle}>
                           {data.firstname} {data.lastname}
                  </NavLink>

                </p>
              ))}
              </div>
              </ul>
              </div>
            
    )
}
