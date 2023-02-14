import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles/DatePicker.css';

/* Code based on JS Stack https://www.youtube.com/watch?v=CbXGyv3HI2w&t=1766s */

const DatePicker = props => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const bookableTimes = {
        Sun: ["10:00", "10:30", "14:00", "15:00"], 
        Mon: ["10:00", "10:30", "11:00", "13:00", "13:30"], 
        Tue: ["09:00", "10:30", "13:30", "14:00", "16:00"], 
        Wed: ["10:00", "10:30", "14:00", "14:30", "15:00", "15:30"], 
        Thu: ["11:00", "11:30", "14:00", "15:00"], 
        Fri: ["08:00", "09:30", "10:00", "12:30", "17:00"], 
        Sat: ["10:00", "10:30", "11:00"]
    }

    const getNumberOfDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getSortedDays = (year, month) => {
        const dayIndex = new Date(year, month, 1).getDay();
        const firstHalf = dayNames.slice(dayIndex);
        return [...firstHalf, ...dayNames.slice(0, dayIndex)]
    };

    const getAvailableTimes = () => {
        return bookableTimes[dayNames[selectedDate.getDay()]];
    }

    const range = (start, end) => {
        const length = Math.abs((end - start) / 1);

        const {result} = Array.from({length}).reduce(
            ({result, current}) => ({
                result: [...result, current],
                current: current + 1,
            }), 
            {result: [], current: start}
        );

        return result;
    }

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const [selectedDate, setSelectedDate] = useState(new Date(currentYear, currentMonth, new Date().getDate()));
    const [selectedTime, setSelectedTime] = useState(getAvailableTimes()[0]);

    useEffect(() => {
        //setSelectedDate(new Date(currentYear, currentMonth, 1));
        var year = selectedDate.toLocaleString("default", { year: "numeric" });
        var month = selectedDate.toLocaleString("default", { month: "2-digit" });
        var day = selectedDate.toLocaleString("default", { day: "2-digit" });

        // Generate yyyy-mm-dd date string
        var formattedDate = year + "-" + month + "-" + day;
        props.getSelectedDateTime(formattedDate + " " + selectedTime);
    }, [selectedDate, selectedTime]) 

    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth((prev) => prev + 1);
        } else {
            setCurrentMonth(0);
            setCurrentYear((prev) => prev + 1);
        }
        console.log(selectedDate);
    }

    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth((prev) => prev - 1)
        } else {
            setCurrentMonth(11);
            setCurrentYear((prev) => prev - 1);
        }
    }

    const handleSelection = (event) => {
        if (event.target.id === "day") {
            setSelectedDate(
                new Date(
                    currentYear, 
                    currentMonth, 
                    event.target.getAttribute("data-day")
                )
            );

            console.log(selectedDate);
        }
    }

    const handleTimeSelection = (event) => {
        if (event.target.id === "time") {
            setSelectedTime(event.target.getAttribute("data-time"));
        }
    }

    return (
        <div className='DatePicker'>
            <div className='DatePickerHeader'>
                <img className='DatePickerArrow' src="arrow-left.svg" alt="Prev" onClick={prevMonth}></img>
                <p>{monthNames[currentMonth]} {currentYear}</p>
                <img className='DatePickerArrow' src="arrow-right.svg" alt="Next" onClick={nextMonth}></img>
            </div>
            <div className='DatePickerBody'>
                <div className='DatePickerColumns weekdays'>
                    {getSortedDays(currentYear, currentMonth).map((day) => 
                        (<p key={day}>{day}</p>)
                    )}
                </div>
                <div className='DatePickerColumns' onClick={handleSelection}>
                    {range(
                        1, 
                        getNumberOfDaysInMonth(currentYear, currentMonth) + 1
                        ).map((day) => (
                            <p
                                key={day}
                                id="day" 
                                data-day={day}
                                className={selectedDate.getTime() === new Date (currentYear, currentMonth, day).getTime() ? "activeDay" : ""}
                                >{day}</p>
                            ))
                        }
                </div>
                <div>Available times</div>
                <div className='DatePickerAvailableTimes' onClick={handleTimeSelection}>
                    {getAvailableTimes().map((time) => (
                        <p 
                            key={time} 
                            id="time"
                            data-time={time}
                            className={selectedTime === time ? "activeTime" : ""}
                            >{time}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DatePicker;

