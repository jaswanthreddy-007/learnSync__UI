import React from 'react'
import Navbar from './Navbar'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Schedule = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "DSA exam (Internal)", date: "2024-03-03" },
            { title: "DBMS exam (Internal)", date: "2024-03-04" },
            {title:"Maths exam (Internal)",date:"2024-03-13"}
          ]}
        />
      </div>
    </>
  );
}

export default Schedule