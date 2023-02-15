import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles/DatePicker.css';

/* Code based on JS Stack https://www.youtube.com/watch?v=CbXGyv3HI2w&t=1766s */

const DatePicker = props => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    /* Bookable times dummy data */
    const bookableTimes = {
        Sun: ["10:00", "10:30", "14:00", "15:00"],
        Mon: ["10:00", "10:30", "11:00", "13:00", "13:30"],
        Tue: ["09:00", "10:30", "13:30", "14:00", "16:00", "20:00"],
        Wed: ["10:00", "10:30", "14:00", "14:30", "15:00", "15:30"],
        Thu: ["11:00", "11:30", "14:00", "15:00"],
        Fri: ["08:00", "09:30", "10:00", "12:30", "17:00"],
        Sat: ["10:00", "10:30", "11:00"]
    }

    const getSortedDays = () => {
        const firstHalf = dayNames.slice(1);
        return [...firstHalf, ...dayNames.slice(0, 1)]
    };

    /* Code from: https://stackoverflow.com/a/28049628 */
    const getFirstDayInWeek = (year, week) => {
        var firstDay = new Date(year, 0, 1).getDay();
        var d = new Date("Jan 01, " + year + " 01:00:00");
        var w = d.getTime() - (3600000 * 24 * (firstDay - 1)) + 604800000 * (week - 1)
        return new Date(w);
    }

    /* Code from: https://stackoverflow.com/a/28049628 */
    const getLastDayInWeek = (year, week) => {
        var firstDay = new Date(year, 0, 1).getDay();
        var d = new Date("Jan 01, " + year + " 01:00:00");
        var w = d.getTime() - (3600000 * 24 * (firstDay - 1)) + 604800000 * (week - 1)
        return new Date(w + 518400000);
    }

    const getAvailableTimes = (dayName) => {
        return bookableTimes[dayName];
    }

    const getCurrentWeek = (date) => {
        const startDate = new Date(date.getFullYear(), 0, 1);
        var days = Math.floor((date - startDate) /
            (24 * 60 * 60 * 1000));

        return Math.ceil(days / 7);
    }

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentWeek, setCurrentWeek] = useState(getCurrentWeek(new Date()));
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [firstDayInWeek, setFirstDayInWeek] = useState(getFirstDayInWeek(currentYear, currentWeek));
    const [lastDayInWeek, setLastDayInWeek] = useState(getLastDayInWeek(currentYear, currentWeek));

    useEffect(() => {
        setSelectedDate(null);
        setSelectedTime(null);
        setFirstDayInWeek(getFirstDayInWeek(currentYear, currentWeek));
        setLastDayInWeek(getLastDayInWeek(currentYear, currentWeek));
    }, [currentWeek])

    useEffect(() => {
        if (selectedDate && selectedTime) {
            // Generate yyyy-mm-dd date string
            var year = selectedDate.toLocaleString("default", { year: "numeric" });
            var month = selectedDate.toLocaleString("default", { month: "2-digit" });
            var day = selectedDate.toLocaleString("default", { day: "2-digit" });

            var formattedDate = year + "-" + month + "-" + day;
            props.getSelectedDateTime(formattedDate, selectedTime);
        } else {
            props.getSelectedDateTime(null, null);
        }

    }, [selectedDate, selectedTime])

    const getDatesOfWeek = (firstDayInWeek) => {
        var day = new Date(firstDayInWeek);
        var dates = [];
        for (var i = 0; i < 7; i++) {
            dates.push(new Date(day.getTime()));
            day.setDate(day.getDate() + 1);
        }
        return dates;
    }

    const nextWeek = () => {
        if (currentWeek < 52) {
            setCurrentWeek((prev) => prev + 1);
        } else {
            setCurrentWeek(1);
            setCurrentYear((prev) => prev + 1);
        }
    }

    const prevWeek = () => {
        if (currentWeek > 1) {
            setCurrentWeek((prev) => prev - 1);
        } else {
            setCurrentWeek(52);
            setCurrentYear((prev) => prev - 1);
        }
    }

    const handleSelection = (event) => {
        if (event.target.id === "time") {
            var date = new Date(event.target.getAttribute("data-day"));

            var time = event.target.getAttribute("data-time");

            var y = date.getFullYear();
            var m = date.getMonth();
            var d = date.getDate();

            setSelectedTime(event.target.getAttribute("data-time"));
            setSelectedDate(new Date(y, m, d, parseInt(time.slice(0, 2)), parseInt(time.slice(3, 5)), 0));
        }
    }

    var minDate = new Date();
    var maxDate = new Date(2023, 3, 30);

    return (
        <div className='DatePicker'>
            <div className='DatePickerHeader'>
                <button onClick={prevWeek} disabled={minDate.getTime() > firstDayInWeek.getTime()}>
                    <img className='DatePickerArrow noSelect' src={minDate.getTime() > firstDayInWeek.getTime() ? "disabled-arrow-left.svg" : "arrow-left.svg"} alt="Prev"></img>
                </button>
                <div>
                    <p>{firstDayInWeek.getDate()} {monthNames[firstDayInWeek.getMonth()].slice(0, 3)} - {lastDayInWeek.getDate()} {monthNames[lastDayInWeek.getMonth()].slice(0, 3)} {currentYear}</p>
                    <p>Week {currentWeek}</p>
                </div>
                
                <button onClick={nextWeek} disabled={maxDate.getTime() < firstDayInWeek.getTime()}>
                    <img className='DatePickerArrow noSelect' src={maxDate.getTime() < firstDayInWeek.getTime() ? "disabled-arrow-right.svg" : "arrow-right.svg"} alt="Next"></img>
                </button>
            </div>
            <div className='DatePickerBody'>
                <div className='DatePickerColumns'>
                    {getSortedDays().map((day) => 
                    <div className="weekdays" key={day}>{day}</div>)}
                    {(getDatesOfWeek(firstDayInWeek))
                        .map((day) => (
                            <div
                                key={day.getDate()}
                                id="day"
                                className="weeknumbers"
                                data-day={day}
                                disabled={minDate.getTime() > new Date(day).setDate(day.getDate() + 1)}
                                >
                                {day.getDate()}
                            </div>
                        )
                        )}
                </div>
                <div className='DatePickerColumns availableTimes'>
                    {getDatesOfWeek(firstDayInWeek).map((day) => (
                        <div
                            key={day}
                            className='availableTimesContainer'
                        >
                            {getAvailableTimes(dayNames[day.getDay()]).map((time) => (
                                new Date().setHours(new Date().getHours() + 1) < new Date(day).setHours(parseInt(time.slice(0, 2)), parseInt(time.slice(3, 5)), 0) ?
                            (<p
                                
                                key={time}
                                id="time"
                                data-time={time}
                                data-day={day}
                                onClick={handleSelection}
                                className={
                                    selectedDate? (selectedDate.getTime() === new Date (day).setHours(parseInt(time.slice(0, 2)), parseInt(time.slice(3, 5)), 0) ? "activeDay" : "") : ""}
                            >
                                {time}
                            </p>) : null
                        ))
                        
                        }</div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DatePicker;

