import React, { useState } from 'react'
import './Calendar.css'
import { assets } from '../../assets/assets';

const Calendar = ({choose}) => {

    const [selectedDay, setSelectedDay] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedHour, setSelectedHour] = useState("");
    const [selectedMinute, setSelectedMinute] = useState("");

    // Generate days of the week
    const daysOfWeek = ["Saturday, April 15", "Sunday, April 16"];

    const hourForDinner = ["06.00 PM", "07.00 PM", "08.00 PM"];
    const hourForAquarium = ["09.00 AM", "11.00 AM", "01.00 PM"];
    const hourForMovie = ["09.00 AM", "11.00 AM", "12.00 AM", "01.00 PM", "02.00 PM", "06.00 PM", "07.00 PM"];

    

    // Generate hours and minutes options
    const hours = ['']

    // Function to handle date change
    const handleDateChange = () => {
        const dateTime = `${selectedDay}, ${selectedDate} ${months[parseInt(selectedMonth) - 1]} ${selectedYear}, ${selectedHour}:${selectedMinute}`;
        console.log("Selected Date and Time: ", dateTime);
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
          <label>Hari: </label>
          <select  value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
            {daysOfWeek.map((day, index) => (
              <option key={index} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="calendar-item jam">
          <label>Jam: </label>
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
        <button onClick={handleDateChange} className="confirm-btn">Confirm</button>
      </div>
    </div>
  )
}

export default Calendar