import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Employee(){

    const [employee, setEmployee] = useState([]);
    const emplistStyle = {
        height: '770px', 
        overflowY: 'scroll', 
      };
    useEffect((props) => {
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
                  <Link to={`/employees/${data.id}`} className="navbar-brand">
                           {data.firstname} {data.lastname}
                  </Link>

                </p>
              ))}
              </div>
              </ul>
              </div>
            
    )
}
