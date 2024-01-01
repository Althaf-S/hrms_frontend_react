import React,{useState} from "react";
import { useParams } from 'react-router-dom';

const LeaveForm = ({ onLeaveSubmit }) => {
    const { id } = useParams();
    const [leaveData, setLeaveData] = useState({date: '',reason: '',});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLeaveData({...leaveData, [name]: value });
      };

      const buttonStyle = {
        display: 'inline-block',
        backgroundColor: '#006400',
        padding: '15px',
        width: '200px',
        color: '#ffffff',
        textAlign: 'center',
      };

      const handleSubmit = async (e) => {
      e.preventDefault();
       try
        {
          const response = await fetch(`http://localhost:5000/leave/${id}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(leaveData),
          });

          if (response.ok) {
            onLeaveSubmit();
            setLeaveData({ date: '', reason: '' });
            window.alert('Leave submitted successfully');
          } else {
            window.alert('Check your entry for any mistakes');
            setLeaveData({ date: '', reason: '' });
        }
    }catch (error) {
      window.alert('Leave not submitted due to same data present in database');
    }

  };
  return (
    <form onSubmit={handleSubmit}>
        <h1>Leave submission form</h1>
      <label>
      <strong>Leave date:</strong>
      <input
        type="date"
         name="date"
        value={leaveData.date}  
      onChange={handleInputChange}
      />
      </label>
      <label>
        <strong>Reason:</strong>
        <textarea
          name="reason"
          value={leaveData.reason}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <br/>
      <button style={buttonStyle} type="submit">Submit Leave</button>
    </form>
  );
};

export default LeaveForm;