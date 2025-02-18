import React, { useState } from 'react'
import './Calendar.css'
import { assets } from '../../assets/assets';
import { jsPDF } from 'jspdf';
import { useLocation, useNavigate } from 'react-router-dom';

const Calendar = ({choose}) => {

    const [selectedDay, setSelectedDay] = useState("");
    const [selectedHour, setSelectedHour] = useState("");


    const navigate = useNavigate();

    // Generate days of the week
    const daysOfWeek = [null, "Saturday, April 15", "Sunday, April 16"];

    const hourForDinner = [null, "06.00 PM", "07.00 PM", "08.00 PM"];
    const hourForAquarium = [null, "09.00 AM", "11.00 AM", "01.00 PM"];
    const hourForMovie = [null, "09.00 AM", "11.00 AM", "12.00 AM", "01.00 PM", "02.00 PM", "06.00 PM", "07.00 PM"];

    // Generate hours and minutes options
    const hours = ['']

    // Function to handle date change
    const handleClick = () => {
        const dateTime = `${selectedDay}, ${selectedHour}`;
        const whereWeGo = choose
        if (selectedDay && selectedHour) {
          navigate('/', { state: { dateTime, whereWeGo } });
          console.log("Selected Date and Time: ", dateTime);
        }
    };
    
  return (
    <div className="calendar-container">
        <div className="love-mini">
            <img src={assets.love} alt="" />
        </div>
        <div className="love-mini2">
            <img src={assets.love} alt="" />
        </div>
        <div className="love-mini3">
            <img src={assets.love} alt="" />
        </div>
      <h3>Select Date and Time to go {choose}</h3>
      <div className="calendar-grid">
        <div className="calendar-item day">
          <label>Day: </label>
          <select  value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
            {daysOfWeek.map((day, index) => (
              <option key={index} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="calendar-item jam">
          <label>Hour: </label>
          <select value={selectedHour} onChange={(e) => setSelectedHour(e.target.value)}>
            {
                choose === 'Dinner' 
                ? hourForDinner.map((hour) => (
                    <option key={hour} value={hour}>{hour}</option>
                ))
                : choose === 'Aquarium'
                ? hourForAquarium.map((hour) => (
                    <option key={hour} value={hour}>{hour}</option>
                ))
                : choose === 'Movie'
                ? hourForMovie.map((hour) => (
                    <option key={hour} value={hour}>{hour}</option>
                ))
                : hours.map((hour) => (
                    <option key={hour} value={hour}>{hour}</option>
                ))
            }
          </select>
        </div>

      </div>

      <div>
        <button onClick={handleClick} className="confirm-btn">Confirm</button>
      </div>
    </div>
  )
}

export default Calendar