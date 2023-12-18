import React,{useState} from "react";
import { useParams } from 'react-router-dom';
import EmployeeDetails from "../employeedetails/employeedetails";

const LeaveForm = ({ onLeaveSubmit }) => {
    const { id } = useParams();
    const [leaveData, setLeaveData] = useState({date: '',reason: '',});
    console.log(id)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLeaveData({...leaveData, [name]: value });
      };

      const handleSubmit = async (e) => {
      e.preventDefault();
         {
          const response = await fetch(`http://localhost:5000/leave/${id}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(leaveData),
          });

          if (response.ok) {
            console.log("Leave submitted successfully");
            onLeaveSubmit();
            setLeaveData({ date: '', reason: '' });
            window.alert('Leave submitted successfully');
          } else {
            console.error("Failed to submit leave");

        }
     }

  };
  return (
    <form onSubmit={handleSubmit}>
        <h1>Leave submission form</h1>
      <label>
      Leave date:
      <input
        type="date"
         name="date"
        value={leaveData.date}  
      onChange={handleInputChange}
      />
      </label>
      <label>
        Reason:
        <textarea
          name="reason"
          value={leaveData.reason}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit Leave</button>
    </form>
  );
};

export default LeaveForm;