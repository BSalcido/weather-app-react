import React from "react";
import "./FormattedDate.css";

function FormattedDate(props) {
  let timeInformation = new Date(props.timeStamp * 1000);

  // Get the date
  let date = timeInformation.getDate();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDays[timeInformation.getDay()];

  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[timeInformation.getMonth()];

  //  Get the time
  let timeString = timeInformation.toTimeString();
  let onlyHour = timeString.slice(0, 5);
  return (
    <div className="formatted-date">
      <div className="formatted-date__today">
        {day} {date}/{month}
      </div>
      <div className="formatted-date__time">Last updated: {onlyHour}</div>
    </div>
  );
}

export default FormattedDate;
