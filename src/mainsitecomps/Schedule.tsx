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
            { title: "DSA exam (Internal)", date: "2024-05-31" },
            { title: "DBMS exam (Internal)", date: "2024-05-31" },
            {title:"Maths exam (Internal)",date:"2024-05-28"}
          ]}
        />
      </div>
    </>
  );
}

export default Schedule